<template>
    <div class="bg-white w-[240px]">
      <button
        :class="[
          'w-full text-left h-14 px-6 py-3 text-xl transition-all duration-200 ease-in-out',
          'text-brand-black bg-button-hover',
          {
          'font-bold [clip-path:polygon(0_0,calc(100%)_0,calc(100%-1.5rem)_50%,calc(100%)_100%,0_100%)]': selected,
          'font-normal': !selected,
          }
    ]"
  >
  <span class="block truncate"><slot /></span>

  </button>
</div>
</template>

<script setup>
defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>