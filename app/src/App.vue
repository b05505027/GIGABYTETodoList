<template>
  <main class="flex flex-col items-center justify-start min-h-screen space-y-8 p-12">
    
    <!-- LabeledInput Component -->
    <div class="w-full max-w-2xl">
      <LabeledInput
        id="item-title-input"
        label="Title"
        placeholder="new item title"
        v-model="newItemTitle"
      />
    </div>

    <!-- LabeledTextarea Component -->
    <div class="w-full max-w-2xl">
      <LabeledTextarea
        id="item-content"
        label="Content"
        placeholder="content..."
        v-model="itemContent"
      />
    </div>

    <!-- New LabeledDatePicker Component -->
    <div class="w-full max-w-2xl">
      <LabeledDatePicker
        id="task-date-range"
        label="Date"
        v-model:startDate="startDate"
        v-model:endDate="endDate"
      />
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import LabeledInput from './components/LabeledInput.vue';
import LabeledTextarea from './components/LabeledTextarea.vue';
import LabeledDatePicker from './components/LabeledDatePicker.vue'; 

// Create reactive variables for our components
const newItemTitle = ref('');
const itemContent = ref('');
const startDate = ref(null); // 2. Refs for the date range
const endDate = ref(null);
</script>