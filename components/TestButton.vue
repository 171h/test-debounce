<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <h1>Test Button</h1>
  <UButton>Button</UButton>
  <UButton label="Button" />
  <UButton label="Button" color="gray" variant="solid" />
  <UButton label="Button" color="white" variant="solid" />
  <UButton label="Button" color="black" variant="solid" />
  <UButton label="Button" size="sm" />
  <UButton label="Button" :ui="{ rounded: 'rounded-full' }" />
  <UButton
    label="Button"
    icon="i-heroicons-pencil-square"
    size="sm"
    color="primary"
    variant="solid"
    :trailing="false"
  />
  <UButton
    icon="i-heroicons-pencil-square"
    size="sm"
    color="primary"
    square
    variant="solid"
  />
  <UButton
    icon="i-heroicons-pencil-square"
    size="sm"
    color="primary"
    square
    variant="solid"
    disabled
  />
  <UButton loading />
  <UButton label="Button" loading />
  <UButton label="Button" block />
  <UButton label="Button" to="https://volta.net" target="_blank" />
  <UButton label="Button" :padded="true" />
  <UButton label="Button" :padded="false" />

  <UButton label="Button" square />
  <UButton label="Button" :square="false" />

  <UButton truncate class="w-20" label="Button with a long text" />

  <UButtonGroup size="sm">
    <UButton label="Action" color="white" />
    <UButton icon="i-heroicons-chevron-down-20-solid" color="gray" />
  </UButtonGroup>

  <UButton label="Button" color="gray">
    <template #leading>
      <UAvatar src="https://avatars.githubusercontent.com/u/40647432?v=4" size="3xs" />
    </template>
  </UButton>

  <UButton label="Button" color="gray">
    <template #trailing>
      <UIcon name="i-heroicons-arrow-right-20-solid" />
    </template>
  </UButton>
</template>
