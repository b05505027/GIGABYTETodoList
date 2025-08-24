<template>
  <div class="h-screen w-screen flex antialiased text-gray-800 bg-white">
    <!-- Mobile Header -->
    <header class="md:hidden flex justify-between items-center p-4 w-full fixed top-0 bg-white z-20">
      <button @click="isSidebarOpen = true">
        <Bars3Icon class="h-8 w-8" />
      </button>
      <div v-if="$route.path !== '/content'">
        <TrashIcon @click="requestDelete" class="h-8 w-8 text-gray-400 hover:text-red-500" />
      </div>
    </header>

    <!-- Mobile Sidebar Overlay -->

      <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 bg-black opacity-50 md:hidden z-25 transition-opacity duration-300 ease-in-out"
      ></div>

    <!-- Sidebar -->
    <!-- Mobile: Absolute overlay -->
    <div :class="['fixed inset-0 z-30 transition-transform transform md:hidden', isSidebarOpen ? 'translate-x-0' : '-translate-x-full']">
      <Sidebar @close="isSidebarOpen = false" />
    </div>

    <!-- Desktop: Fixed 240px sidebar -->
    <div class="hidden md:flex" style="width: 240px; min-width: 240px;">
      <Sidebar />
    </div>

    <!-- Main Content -->
    <main class="flex-1 pt-20 md:pt-0">
      <RouterView :key="$route.fullPath" v-slot="{ Component }">
        <Component :is="Component" ref="contentView"/>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Bars3Icon, TrashIcon } from '@heroicons/vue/24/solid';
import Sidebar from './components/Sidebar.vue';

const isSidebarOpen = ref(false);
const contentView = ref(null);

const requestDelete = () => {
  if (contentView.value && typeof contentView.value.handleDeleteItem === 'function') {
    contentView.value.handleDeleteItem();
  }
};
</script>