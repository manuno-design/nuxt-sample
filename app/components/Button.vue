
<template>
  <button class="bg-green-500 hover:bg-green-400 text-white rounded px-4 py-2" @click="emits('click')" :class="[props.variant, props.size]">
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value: string) => {
      return ["primary", "secondary"].includes(value);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator: (value: string) => {
      return ["small", "medium", "large"].includes(value);
    },
  },
});

const emits = defineEmits(["click"]);
</script>
