<template>
  <button
    :disabled="disabled"
    class="
      px-6 
      py-6 
      rounded-2xl
      font-sans text-4xl font-light text-brand-black
      bg-button-normal
      transition-colors duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      hover:bg-button-hover
      disabled:bg-button-normal 
      disabled:text-brand-gray 
      disabled:cursor-not-allowed
      disabled:hover:bg-button-normal
    "
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
