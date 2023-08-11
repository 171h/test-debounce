<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const selected = ref(false)
</script>

<template>
  <h1>Test Toggle bug with unocss</h1>
  <UToggle v-model="selected" />
  <UToggle v-model="selected" color="primary" />
  <UToggle v-model="selected" on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid" />
  <UToggle v-model="selected" disabled />
</template>
