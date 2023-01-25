<script lang="ts" setup>
import { CatResponse } from '~~/types';

interface Props {
  catList: CatResponse[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8 m-5">
    <cat-card v-for="(cat, i) in catList" :key="i" :cat-data="cat" />
  </div>
</template>

<style scoped>
</style>
