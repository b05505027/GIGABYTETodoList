import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    items: [
      {
        id: '1',
        title: '1. Item title',
        content: 'This is the content for the first item.',
        imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2000',
        startDate: '2022-05-17',
        endDate: '2022-05-18',
      },
      {
        id: '2',
        title: '2. new item title',
        content: 'Content for the second item goes here!',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000',
        startDate: '2024-03-10',
        endDate: '2024-03-15',
      },
    ],
    selectedItemId: null,
    isImageLoading: false, // loading image via api
  }),

  getters: {
    selectedItem: (state) => {
      if (!state.selectedItemId) return null;
      return state.items.find(item => item.id === state.selectedItemId);
    },
  },

  actions: {
    setSelectedItemId(id) {
      this.selectedItemId = id;
    },

    addItem() {
      const newItem = {
        id: uuidv4(),
        title: 'New Item',
        content: '',
        imageUrl: '',
        startDate: null,
        endDate: null,
      };
      this.items.push(newItem);
      return newItem.id; // Return new ID to navigate to it
    },

    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id);
      if (this.selectedItemId === id) {
        this.selectedItemId = this.items.length > 0 ? this.items[0].id : null;
      }
    },
    
    updateItem(id, field, value) {
      const item = this.items.find(item => item.id === id);
      if (item) {
        item[field] = value;
      }
    },

    async fetchRandomImage(id) {
      if (!id || this.isImageLoading) return;

      this.isImageLoading = true;
      try {
        const response = await fetch(
            'https://api.pexels.com/v1/curated?per_page=1&page=' + Math.floor(Math.random() * 100),
            {
                headers: {
                    Authorization: import.meta.env.VITE_PEXELS_API_KEY,
                },
            }
        );

        const data = await response.json();
        if (data.photos?.length > 0) {
            const imageUrl = data.photos[0].src.medium;
            this.updateItem(id, 'imageUrl', imageUrl);
        }
      } catch (error) {
          console.error('Failed to fetch image:', error);
      } finally {
          this.isImageLoading = false;
      }
    },
    handleImageError(event) {
      event.target.style.opacity = '0' // Hide the broken image
      event.target.parentElement.classList.add('bg-brand-gray', 'rounded-lg')
    },
    handleImageLoad(event)  {
      event.target.parentElement.classList.remove('bg-brand-gray', 'rounded-lg')
      event.target.style.opacity = '1' // Show the loaded image
    }
  },
});