<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <h1>Test Tooltip with bug</h1>
  <UTooltip text="Tooltip example" :shortcuts="['⌘', 'O']">
    <UButton color="gray" label="Hover me" />
  </UTooltip>
</template>
