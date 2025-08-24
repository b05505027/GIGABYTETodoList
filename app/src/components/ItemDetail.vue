<template>
  <div v-if="item" class="p-8 md:p-4 relative h-full overflow-y-auto">
    <!-- Header -->
    <div class="flex justify-end items-center mb-8 hidden md:flex">
      <button @click="handleDeleteItem" class="text-gray-400 hover:text-red-500 transition-colors">
        <TrashIcon class="h-8 w-8" />
      </button>
    </div>

    <!-- Form -->
    <div class="space-y-6">

     <div class="grid grid-cols-1 md:[grid-template-columns:1fr_minmax(265px,1fr)] gap-8 items-center">
      <LabeledInput id="title" label="Title" placeholder="new item title" :modelValue="item.title" @update:modelValue="update('title', $event)" />

      <LabeledDatePicker id="date" label="Date" :startDate="item.startDate" @update:startDate="update('startDate', $event)" :endDate="item.endDate" @update:endDate="update('endDate', $event)" />
      </div>
      <div>
        <label class="block mb-2 text-xl font-medium text-brand-black">Image</label>
        <div class="grid grid-cols-1 md:[grid-template-columns:1fr_minmax(265px,1fr)] gap-8 items-center">
            <div class="space-y-2">
                <BaseButton @click="triggerFileUpload" class="w-full">Upload Image</BaseButton>
                <input type="file" ref="fileInput" @change="handleImageUpload" class="hidden" accept="image/*" />
                <span class="block text-center text-gray-500">or</span>
                <BaseInput placeholder="請輸入圖片網址" :modelValue="item.imageUrl" @update:modelValue="update('imageUrl', $event)" />
            </div>
            <div>
              <img @error="todoStore.handleImageError" @load="todoStore.handleImageLoad" v-if="item.imageUrl" :src="item.imageUrl" class="w-full h-40 object-cover rounded-lg" />
            </div>
        </div>
      </div>
      
      <LabeledTextarea id="content" label="Content" placeholder="content..." :maxLength="200" :modelValue="item.content" @update:modelValue="update('content', $event)" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTodoStore } from '../stores/todoStore';
import { useRouter } from 'vue-router';
import { TrashIcon } from '@heroicons/vue/24/solid';

// Import all your form components
import LabeledInput from './LabeledInput.vue';
import LabeledDatePicker from './LabeledDatePicker.vue';
import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';
import LabeledTextarea from './LabeledTextarea.vue';

const props = defineProps({ id: String });
const todoStore = useTodoStore();
const router = useRouter();
const fileInput = ref(null);

// Find the item from the store
const item = ref(todoStore.items.find(i => i.id === props.id));
// Set the selected item in the store for other components to use
todoStore.setSelectedItemId(props.id);

watch(() => props.id, (newId) => {
    item.value = todoStore.items.find(i => i.id === newId);
    todoStore.setSelectedItemId(newId);
});

const update = (field, value) => {
  todoStore.updateItem(props.id, field, value);
};

const handleDeleteItem = () => {
  todoStore.deleteItem(props.id);
  const nextItemId = todoStore.items.length > 0 ? todoStore.items[0].id : null;
  if(nextItemId) {
    router.push(`/content/${nextItemId}`);
  } else {
    router.push('/content');
  }
};

const triggerFileUpload = () => {
    fileInput.value.click();
};

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        // Create a local URL for instant preview. 
        // In a real app, you would upload this to a server.
        const localUrl = URL.createObjectURL(file);
        update('imageUrl', localUrl);
    }
};

defineExpose({ handleDeleteItem });
</script>