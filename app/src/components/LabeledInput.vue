<template>
  <div class="w-full">
    <label
      :for="id"
      class="block mb-0 text-xl font-normal text-brand-black"
    >
      {{ label }}
    </label>
    <BaseInput
      :id="id"
      v-model="model"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import BaseInput from './BaseInput.vue';


const model = defineModel({ required: true });

defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});
</script>