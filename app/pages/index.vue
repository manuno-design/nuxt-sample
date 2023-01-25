<script lang="ts" setup>
import { catData } from '~~/composables/cat'

const { data, updateData } = catData();
updateData()
</script>

<template>
  <div>
    <cat-card-list :cat-list="data"/>
  </div>
</template>

<style scoped>
.content {
  margin: auto;
}
</style>
