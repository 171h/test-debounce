<script setup>
const value = ref('')
</script>

<template>
  <h1>Test Textarea</h1>
  <UTextarea v-model="value" />
  <UTextarea color="primary" variant="outline" />
  <UTextarea color="gray" variant="outline" />
  <UTextarea size="sm" />
  <UTextarea size="xl" />
  <UTextarea placeholder="Search..." />
  <UTextarea rows="1" />
  <UTextarea disabled />
  <UTextarea autoresize />
</template>
