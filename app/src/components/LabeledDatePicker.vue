<template>
  <div class="w-full">
    <label 
      class="block text-xl font-normal text-brand-black"
    >
      {{ label }}
    </label>
    <div class="flex justify-between items-center space-x-2">
      <!-- Start Date Picker -->
      <div class="relative flex-2">
        <label
          :for="id + '-start'"
          @click.prevent="openStart"
          class="
            block bg-brand-gray rounded-xl text-brand-black  z-10
            text-xl text-center font-sans
            px-2 py-4 cursor-pointer
            focus-within:ring-2 focus-within:ring-mint-active
          "
        >
          {{ formattedStartDate }}
        </label>
        <input
          ref="startRef"
          :id="id + '-start'"
          type="date"
          v-model="startDate"
          @click.prevent="openStart"
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <!-- Tilde Separator -->
      <span class="text-3xl text-brand-black">~</span>

      <!-- End Date Picker -->
      <div class="relative flex-2">
        <label
          :for="id + '-end'"
          class="
            block bg-brand-gray rounded-xl text-brand-black 
            text-xl text-center font-sans
            px-x py-4 cursor-pointer select-none
            focus-within:ring-2 focus-within:ring-mint-active
          "
        >
          {{ formattedEndDate }}
        </label>
        <input
          ref="endRef"
          :id="id + '-end'"
          type="date"
          v-model="endDate"
          :min="minEndDate"
          @click.prevent="openEnd"
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { computed, watch, ref} from 'vue';

// Setup two-way binding for start and end dates from the parent
const startDate = defineModel('startDate');
const endDate = defineModel('endDate');

const startRef = ref(null);
const endRef = ref(null);

function openStart() {
  if (startRef.value?.showPicker) startRef.value.showPicker();
  else startRef.value?.focus();
}
function openEnd() {
  if (endRef.value?.showPicker) endRef.value.showPicker();
  else endRef.value?.focus();
}

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

// Helper to format date from YYYY-MM-DD to YYYY/MM/DD for display
const formatDate = (dateString) => {
  if (!dateString) return 'YYYY/MM/DD';
  return dateString.replace(/-/g, '/');
};

const formattedStartDate = computed(() => formatDate(startDate.value));
const formattedEndDate = computed(() => formatDate(endDate.value));

// CONSTRAINT 1: Calculate the minimum selectable end date
const minEndDate = computed(() => {
  if (!startDate.value) return null;
  const date = new Date(startDate.value);
  date.setDate(date.getDate() + 1);
  return date.toISOString().split('T')[0];
});

// CONSTRAINT 2: If start date changes to be after the end date, clear the end date
watch(startDate, (newStartDate) => {
  if (newStartDate && endDate.value && newStartDate >= endDate.value) {
    endDate.value = null;
  }
});
</script>