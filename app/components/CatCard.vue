<script lang="ts" setup>
import { CatResponse  } from '~~/types';

interface Props {
  catData: CatResponse;
}

defineProps<Props>();
</script>

<template>
  <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
    <img
      class="h-full w-full object-cover object-center group-hover:opacity-75"
      :src="catData.url"
      alt="cute cat"
      :data-testid="catData.id"
    />
  </div>
</template>

<style scoped>
.card-img {
  border-radius: 8px;
  width: 320px;
  height: 320px;
  object-fit: cover;
}
</style>
