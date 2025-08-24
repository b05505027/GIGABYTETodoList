<template>
  <aside class="w-64 bg-sidebar-background text-brand-black flex flex-col h-full">
    <div class="flex-shrink-0"> <!-- Header container -->
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold py-4 pl-4">Demo Todo List</h1>
        <button @click="$emit('close')" class="md:opacity-0 p-4">
          <XMarkIcon class="h-8 w-8" />
        </button>
      </div>
    </div>

    <!-- Scrollable Item List -->
    <div class="space-y-1 overflow-y-auto max-h-[65%]">
      <RouterLink v-for="item in todoStore.items" :key="item.id" :to="`/content/${item.id}`" custom v-slot="{ navigate, isActive }">
        <SidebarButton :selected="isActive" @click="navigate">
          {{ item.title }}
        </SidebarButton>
      </RouterLink>
    </div>

    <div class="flex-grow p-4">
        <BaseButton @click="handleAddItem" class="small-button-padding w-full bg-button-normal hover:bg-button-hover">Add Item</BaseButton>
    </div>


    <!-- Bottom Section (Add Button & Image Preview) -->
    <div class="flex-shrink-0"> <!-- Bottom container -->
      <div  class="mt-4 p-6">
        <!-- IMAGE PREVIEW WITH LOADING STATE -->
        <div 
          v-if="todoStore.selectedItem"
          class="relative w-full h-18 rounded-xl bg-brand-gray flex items-center justify-center overflow-hidden"
          :class="{ 'cursor-wait': todoStore.isImageLoading }"
          @click="todoStore.fetchRandomImage(todoStore.selectedItemId)"
        >
          <img 
            v-if="todoStore.selectedItem.imageUrl"
            :src="todoStore.selectedItem.imageUrl" 
            alt="Preview" 
            class="w-full h-full object-cover rounded-xl transition-opacity"
            :class="{ 'opacity-50': todoStore.isImageLoading }"
          >
          <div v-else class="text-xl">no image</div>
          <!-- Loading Overlay -->
          <div v-if="todoStore.isImageLoading" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <!-- Simple SVG Spinner -->
            <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
        <div v-else class="relative w-full h-18 rounded-xl bg-brand-gray text-center flex items-center justify-center">
            <div class="text-xl">no image</div>
        </div>
      </div>



    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useTodoStore } from '../stores/todoStore';
import SidebarButton from './SidebarButton.vue';
import BaseButton from './BaseButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';

defineEmits(['close']);
const todoStore = useTodoStore();
const router = useRouter();

const handleAddItem = () => {
  const newId = todoStore.addItem();
  router.push(`/content/${newId}`);
};
</script>

<style>
.small-button-padding {
  padding: 0.5rem 0.5rem !important;
}
</style>