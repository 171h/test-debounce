<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
const value = ref('')
const q = ref('')
</script>

<template>
  <h1>Test Input</h1>
  <UInput v-model="value" />
  <UInput v-model="value" disabled />
  <UInput v-model="value" color="primary" variant="outline" />
  <UInput v-model="value" color="white" variant="outline" />
  <UInput v-model="value" size="xl" />
  <UInput v-model="value" placeholder="Search..." />
  <UInput v-model="value" placeholder="Search..." icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false" />
  <UInput v-model="value" loading icon="i-heroicons-magnifying-glass-20-solid" />

  <UInput v-model="value">
    <template #leading>
      <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="3xs" />
    </template>
  </UInput>

  <UInput v-model="value">
    <template #trailing>
      <span class="text-xs text-gray-500 dark:text-gray-400">EUR</span>
    </template>
  </UInput>

  <UInput v-model="q" name="q" placeholder="Search..." icon="i-heroicons-magnifying-glass-20-solid" :ui="{ icon: { trailing: { pointer: '' } } }">
    <template #trailing>
      <UButton
        v-show="q !== ''"
        color="gray"
        variant="link"
        icon="i-heroicons-x-mark-20-solid"
        :padded="false"
        @click="q = ''"
      />
    </template>
  </UInput>
</template>
