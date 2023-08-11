<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const value = ref(50)
</script>

<template>
  <h1>Test Range</h1>
  <URange v-model="value" />
  <URange v-model="value" color="primary" />
  <URange v-model="value" size="md" />
  <URange v-model="value" disabled />
  <URange v-model="value" :min="0" :max="100" />
  <URange v-model="value" :step="20" />
</template>
