<template>
  <div class="w-full">
    <label 
      :for="id" 
      class="block mb-2 text-xl font-normal text-brand-black"
    >
      {{ label }}
    </label>
    <div class="relative">
      <textarea
        :id="id"
        v-model="model"
        :placeholder="placeholder"
        :maxlength="maxLength"
        class="
          w-full h-48 p-4 rounded-2xl
          bg-brand-gray
          text-brand-black placeholder:text-gray-500
          text-xl
          border-none resize-none
          focus:outline-none focus:ring-2 focus:ring-mint-active
          transition-shadow duration-200
        "
      ></textarea>
      <div 
        class="
          absolute bottom-[7px] right-0 
          bg-button-normal text-brand-black text-base
          px-18 py-6
          rounded-br-2xl
          [clip-path:polygon(35%_0,_100%_0,_100%_100%,_0_100%)]
        "
      >
      <span
        class="absolute bottom-2 right-4 text-xl"
      >
        {{ maxLength}}/{{ model.length }}
      </span>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  maxLength: {
    type: Number,
    default: 200,
  },
});
</script>