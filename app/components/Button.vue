
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["click"]);
</script>

<template>
  <button class="bg-green-500 hover:bg-green-400 text-white rounded px-4 py-2" @click="emits('click')">
    {{ props.label }}
  </button>
</template>
