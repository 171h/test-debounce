<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
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
  <h1>Test Modal</h1>
  <div>
    <UButton label="Open" @click="isOpen = true" />
    <UModal v-model="isOpen" fullscreen>
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <Placeholder class="h-48" />
      </UCard>
    </UModal>
  </div>

  <div>
    <UButton label="Open" @click="isOpen2 = true" />
    <UModal v-model="isOpen2">
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <Placeholder class="h-10" />
        </template>

        <Placeholder class="h-48" />

        <template #footer>
          <Placeholder class="h-10" />
        </template>
      </UCard>
    </UModal>
  </div>

  <div>
    <h2>Disable overlay</h2>
    <UButton label="Open" @click="isOpen3 = true" />

    <UModal v-model="isOpen3" :overlay="false">
      <div class="p-4">
        <Placeholder class="h-48" />
      </div>
    </UModal>
  </div>
  <div>
    <h2>Disable transition</h2>
    <UButton label="Open" @click="isOpen4 = true" />

    <UModal v-model="isOpen4" :transition="false">
      <div class="p-4">
        <Placeholder class="h-48" />
      </div>
    </UModal>
  </div>

  <div>
    <h2>Prevent close</h2>
    <UButton label="Open" @click="isOpen5 = true" />

    <UModal v-model="isOpen5" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Modal
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isOpen5 = false" />
          </div>
        </template>

        <Placeholder class="h-32" />
      </UCard>
    </UModal>
  </div>
  <div>
    <h2>Fullscreen</h2>
    <UButton label="Open" @click="isOpen6 = true" />
    <UModal v-model="isOpen6" fullscreen>
      <UCard :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'grow'
        }
      }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Modal
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isOpen6 = false" />
          </div>
        </template>

        <Placeholder class="h-full" />
      </UCard>
    </UModal>
  </div>
</template>
