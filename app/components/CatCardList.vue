<script lang="ts" setup>
import { CatResponse } from '~~/types';

interface Props {
  catList: CatResponse[];
}

defineProps<Props>();
</script>

<template>
  <div>
    <cat-card v-for="(cat, i) in catList" :key="i" :cat-data="cat" class="group" />
  </div>
</template>

<style scoped>
.card-test {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
</style>
