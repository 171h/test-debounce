<script setup lang="ts">
const isOpen = ref(false)

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value
    },
  },
})
</script>

<template>
  <UContainer>
    <h1>TestDefineShortcuts</h1>
    <UModal v-model="isOpen" />
  </UContainer>
</template>
