<template>
  <input
    v-model="model"
    :placeholder="placeholder"
    class="
      w-full rounded-xl
      bg-brand-gray
      text-brand-black placeholder:text-placeholder-gray-500
      py-4 px-8 text-xl
      border-none
      focus:outline-none focus:ring-2
      transition-shadow duration-200
    "
  />
</template>

<script setup>

/** { required: true } means the parent must provide a v-model when using this component. */
const model = defineModel({ required: true });

defineProps({
  placeholder: {
    type: String,
    default: '',
  },
});
</script>