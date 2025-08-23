<template>
  <main class="grid grid-cols-4 min-h-screen">
    <!-- Sidebar Column -->
    <div class="col-span-1 bg-brand-gray space-y-2">
      <h2 class="text-xl font-bold p-2 mb-2">My Items</h2>
      
      <SidebarButton
        :selected="selectedItem === 1"
        @click="selectedItem = 1"
      >
        1. Item title
      </SidebarButton>
      
      <SidebarButton
        :selected="selectedItem === 2"
        @click="selectedItem = 2"
      >
        2. new item title
      </SidebarButton>

      <SidebarButton
        :selected="selectedItem === 3"
        @click="selectedItem = 3"
      >
        3. Another item
      </SidebarButton>
    </div>

    <!-- Main Content Column -->
    <div class="col-span-3 bg-brand-white p-12">
      <h1 class="text-4xl font-bold mb-8">Component Display Area</h1>
      <p class="text-lg text-gray-600">
        Click the items in the sidebar to see the selected state change.
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import SidebarButton from './components/SidebarButton.vue'; // 1. Import component

// 2. Create a reactive variable to track the selected item
const selectedItem = ref(1); // Default to the first item being selected
</script>