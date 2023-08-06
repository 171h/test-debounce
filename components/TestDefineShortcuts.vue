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
  <h1>TestDefineShortcuts</h1>
  <UContainer>
    <UModal v-model="isOpen" />
  </UContainer>
</template>
