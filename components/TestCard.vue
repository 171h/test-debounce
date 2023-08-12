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
  <h2>vertical blow:</h2>
  <UCard :ui="{
    base: 'w-full h-full flex',
    rounded: '',
    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
    body: {
      base: 'grow'
    }
  }">
    <template #header>
      <Placeholder class="h-full w-4" />
    </template>

    <Placeholder class="h-48 w-full" />

    <template #footer>
      <Placeholder class="h-full w-4" />
    </template>
  </UCard>
</template>
