<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-white-500 space-y-8 p-12">

    <!-- Previous Button Components -->
    <BaseButton>Btn</BaseButton>
    <BaseButton variant="hover">Hover</BaseButton>
    <BaseButton disabled>Disable</BaseButton>
    
    <!-- New LabeledInput Component -->
    <div class="w-full max-w-2xl mt-8">
      <LabeledInput
        id="item-title-input"
        label="Title"
        placeholder="請輸入圖片網址"
        v-model="newItemTitle"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from './components/BaseButton.vue';
import LabeledInput from './components/LabeledInput.vue'; // 1. Import the new component

// 2. Create reactive variables for our inputs
const newItemTitle = ref('');
const imageUrl = ref('');
</script>