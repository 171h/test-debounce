<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const selected = ref(true)
</script>

<template>
  <h1>Test Checkbox</h1>
  <UCheckbox v-model="selected" name="notifications" label="Notifications" />
  <UCheckbox v-model="selected" name="test" label="Label" />
  <UCheckbox v-model="selected" name="test" color="primary" />
  <UCheckbox v-model="selected" name="test" label="Label" required />
  <UCheckbox v-model="selected" name="test" label="Label" text-left help="Please check this box" />
  <UCheckbox v-model="selected" name="test" label="disabled" disabled />
</template>
