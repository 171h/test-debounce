<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const isOpen = ref(false)
</script>

<template>
  <h1>Test Modal</h1>
  <div>
    <UButton label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div>
        Content
      </div>
    </UModal>
  </div>
  <div>
    <UButton label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <!-- Content -->
        </template>

        <!-- Content -->

        <template #footer>
          <!-- Content -->
        </template>
      </UCard>
    </UModal>
  </div>
</template>
