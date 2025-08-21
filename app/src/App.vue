<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-brand-gray space-y-8">
    
    <!-- 1. Default Button (will change on hover) -->
    <BaseButton>Btn</BaseButton>

    <!-- 2. A static representation of the "Hover" state for comparison -->
    <BaseButton class="bg-button-hover">Hover</BaseButton>
    
    <!-- 3. Disabled Button -->
    <BaseButton disabled>Disable</BaseButton>

  </main>
</template>

<script setup>
import BaseButton from './components/BaseButton.vue';
</script>