<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <h1>Test Badge</h1>
  <UBadge>Badge</UBadge>
  <UBadge label="Badge" />
  <UBadge label="Badge" size="lg" />
  <UBadge label="Badge" color="sky" variant="soft" />
  <UBadge label="Badge" color="white" variant="solid" />
  <UBadge label="Badge" :ui="{ rounded: 'rounded-full' }" />
</template>
