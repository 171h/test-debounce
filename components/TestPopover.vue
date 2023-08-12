<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <h1>Test Popover</h1>
  <UPopover class="w-min">
    <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" />

    <template #panel>
      <Placeholder class="h-20 w-48" />
    </template>
  </UPopover>

  <UPopover class="w-min" mode="hover">
    <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" />

    <template #panel>
      <Placeholder class="h-20 w-48" />
    </template>
  </UPopover>
</template>
