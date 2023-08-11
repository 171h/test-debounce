<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <h1>Test Form Group</h1>
  <UFormGroup name="email" label="Email">
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>

  <UFormGroup label="Email" required>
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>

  <UFormGroup label="Email" description="We'll only use this for spam.">
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>

  <UFormGroup label="Email" hint="Optional">
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>

  <UFormGroup label="Email" help="We will never share your email with anyone else.">
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>

  <UFormGroup label="Email" help="We will never share your email with anyone else." error="Not a valid email address.">
    <UInput placeholder="you@example.com" trailing-icon="i-heroicons-exclamation-triangle-20-solid" />
  </UFormGroup>

  <UFormGroup size="xl" label="Email" hint="Optional" description="We'll only use this for spam." help="We will never share your email with anyone else.">
    <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
  </UFormGroup>
</template>
