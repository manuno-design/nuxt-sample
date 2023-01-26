<script setup lang="ts">
interface PropType {
  labels: string,
  type?: 'button' | 'submit' | 'reset'
}
withDefaults(defineProps<PropType>(), {
  labels: 'Button',
  type: 'button',
})

type Emits = {
  (e: 'click'): void
}
const emit = defineEmits<Emits>()
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button class="bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2" :type="type" @click="handleClick">
    {{ labels }}
  </button>
</template>

<style>
</style>
