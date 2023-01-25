<script lang="ts" setup>
import CatApi from '~~/services/cat';
import { catData } from '~~/composables/cat'

const { updateData } = catData();

</script>


<template>
  <div class="mx-auto max-w-7xl">
    <nav class="bg-blue-500">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <NuxtLink to="/" class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">Home</NuxtLink>
          <NuxtLink to="/about" class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">About</NuxtLink>
        </div>
        <Refresh class="inline-flex items-right justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="updateData()" />
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
