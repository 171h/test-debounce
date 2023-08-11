<script setup lang="ts">
const { metaSymbol } = useShortcuts()
</script>

<template>
  <h1>Test Kbd</h1>
  <UKbd>K</UKbd>
  <UKbd value="K" />
  <UKbd value="K" size="sm" />
  <UKbd value="K" size="xs" />
  <UKbd value="K" size="md" />

  <div class="flex items-center gap-0.5">
    <UKbd>{{ metaSymbol }}</UKbd>
    <UKbd>K</UKbd>
  </div>
</template>
