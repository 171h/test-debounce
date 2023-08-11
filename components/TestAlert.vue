<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <h1>Test Alert</h1>
  <UAlert icon="i-heroicons-command-line" title="Heads up!" description="This is description" />
  <UAlert
    icon="i-heroicons-command-line"
    title="Heads up!"
    description="This is description"
    color="cyan"
    variant="soft"
    :close-button="{
      icon: 'i-heroicons-x-mark-20-solid',
      color: 'gray',
      variant: 'link',
      size: 'sm',
    }"
  />
  <UAlert text-left description="This is description" title="Heads up!" :avatar="{ src: 'https://avatars.githubusercontent.com/u/40647432?v=4' }" />
  <UAlert
    title="Heads up!" :actions="[
      { label: 'Action 1', click: () => console.log('Action 1') },
      { variant: 'ghost', color: 'gray', label: 'Action 2', click: () => console.log('Action 2') },
    ]"
  />

  <UButton>12345</UButton>

  <UAlert
    title="Heads up!" description="123" :actions="[
      { variant: 'solid', color: 'primary', label: 'Action 1', click: () => console.log('Action 1') },
      { variant: 'outline', color: 'primary', label: 'Action 2', click: () => console.log('Action 2') }]"
  />

  <UAlert title="Heads <i>up</i>!" icon="i-heroicons-command-line">
    <template #title="{ title }">
      <span v-html="title" />
    </template>

    <template #description>
      You can add <b>components</b> to your app using the <u>cli</u>.
    </template>
  </UAlert>
</template>
