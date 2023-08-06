<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <h1>Test Avatar</h1>
  <UAvatar
    src="https://avatars.githubusercontent.com/u/40647432?v=4123"
    alt="Avatar"
  />
  <UAvatar
    src="https://a12312"
    alt="HWJ"
  />
  <UAvatar
    src="https://avatars.githubusercontent.com/u/40647432?v=4123"
    size="3xl"
    alt="HWJ"
    chip-color="primary"
    chip-text=""
    chip-position="bottom-right"
    icon="i-heroicons-photo"
  />

  <UAvatarGroup justify-end size="sm" :max="2">
    <UAvatar src="https://avatars.githubusercontent.com/u/40647432?v=4123" alt="benjamincanac" />
    <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
    <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
  </UAvatarGroup>
</template>
