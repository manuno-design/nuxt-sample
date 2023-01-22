<script lang="ts" setup>
import { CatResponse } from '~~/types';

const { pending, error, data} = useFetch<CatResponse[]>(
  'https://api.thecatapi.com/v1/images/search?limit=10'
)
</script>

<template>
  <div v-if="!pending && data" class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <cat-card-list :cat-list="data"/>
  </div>
</template>

<style scoped>
.content {
  margin: auto;
}
</style>
