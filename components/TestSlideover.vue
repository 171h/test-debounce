<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

const isOpen = ref(false)
const isOpen2 = ref(false)
const isOpen3 = ref(false)
const isOpen4 = ref(false)
const isOpen5 = ref(false)
const isOpen6 = ref(false)

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen5],
    handler: () => { isOpen5.value = false }
  }
})
</script>

<template>
  <h1>Test Slideover</h1>
  <div>
    <UButton label="Open" @click="isOpen = true" />
    <USlideover v-model="isOpen">
      <Placeholder class="h-full" />
    </USlideover>
  </div>

  <div>
    <UButton label="Open" @click="isOpen2 = true" />
    <USlideover v-model="isOpen2">
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <Placeholder class="h-10" />
        </template>

        <Placeholder class="h-full" />

        <template #footer>
          <Placeholder class="h-10" />
        </template>
      </UCard>
    </USlideover>
  </div>

  <div>
    <h2>Disable overlay</h2>
    <UButton label="Open" @click="isOpen3 = true" />
    <USlideover v-model="isOpen3" :overlay="false">
      <div class="p-4 flex-1">
        <Placeholder class="h-full" />
      </div>
    </USlideover>
  </div>

  <div>
    <h2>Disable transition</h2>
    <UButton label="Open" @click="isOpen4 = true" />
    <USlideover v-model="isOpen4" :transition="false">
      <div class="p-4 flex-1">
        <Placeholder class="h-full" />
      </div>
    </USlideover>
  </div>

  <div>
    <h2>Prevent close</h2>
    <UButton label="Open" @click="isOpen5 = true" />
    <USlideover v-model="isOpen5" prevent-close>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Slideover
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen5 = false" />
          </div>
        </template>

        <Placeholder class="h-full" />
      </UCard>
    </USlideover>
  </div>
</template>
