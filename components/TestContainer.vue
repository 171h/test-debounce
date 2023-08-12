<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <h1>Test Container</h1>
  <UContainer>
    <Placeholder class="h-48" />
  </UContainer>
</template>
