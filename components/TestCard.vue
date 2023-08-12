<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <h1>Test Card</h1>
  <UCard>
    <template #header>
      <Placeholder class="h-10" />
    </template>

    <Placeholder class="h-48" />

    <template #footer>
      <Placeholder class="h-10" />
    </template>
  </UCard>
</template>
