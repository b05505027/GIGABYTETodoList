<template>
  <main class="flex flex-col items-center justify-start min-h-screen bg-brand-white space-y-8 p-12">
    
    <!-- Previous Button Components -->
    <div class="flex space-x-4">
      <BaseButton>Btn</BaseButton>
      <BaseButton variant="hover">Hover</BaseButton>
      <BaseButton disabled>Disable</BaseButton>
    </div>
    
    <!-- LabeledInput Component -->
    <div class="w-full max-w-2xl">
      <LabeledInput
        id="item-title-input"
        label="Title"
        placeholder="new item title"
        v-model="newItemTitle"
      />
    </div>

    <!-- New LabeledTextarea Component -->
    <div class="w-full max-w-2xl">
      <LabeledTextarea
        id="item-content"
        label="Content"
        placeholder="content..."
        v-model="itemContent"
        :max-length="200"
      />
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from './components/BaseButton.vue';
import LabeledInput from './components/LabeledInput.vue';
import LabeledTextarea from './components/LabeledTextarea.vue';

// 2. Create reactive variables
const newItemTitle = ref('');
const itemContent = ref(''); // Variable for our new textarea
</script>