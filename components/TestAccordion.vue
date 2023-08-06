<script setup lang="ts">
const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  disabled: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}]

const items3 = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  slot: 'getting-started'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  defaultOpen: true,
  slot: 'installation'
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  defaultOpen: true,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]
</script>

<template>
  <h1>TestAccordion</h1>
  <UAccordion default-open multiple open-icon="i-heroicons-plus" close-icon="i-heroicons-minus" :items="items" variant="link" size="sm" />

  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded :'rounded-none', padding: { sm:'p-3' } }">
        <template #leading>
          <div class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
            <UIcon :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900" />
          </div>
        </template>

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
    </template>
  </UAccordion>

  <UAccordion :items="items3">
    <template #item="{ item }">
      <p class="italic text-gray-900 dark:text-white text-center">
        {{ item.description }}
      </p>
    </template>

    <template #getting-started>
      <div class="flex flex-col justify-center items-center gap-1">
        <NuxtLink to="/getting-started" class="flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white">
          <Logo class="w-8 h-8 text-primary-500 dark:text-primary-400" />

          <span class="hidden sm:block">NuxtLabs</span><span class="sm:text-primary-500 dark:sm:text-primary-400">UI</span>
        </NuxtLink>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          Fully styled and customizable components for Nuxt.
        </p>
      </div>
    </template>

    <template #installation="{ description }">
      <div class="flex flex-col justify-center items-center gap-1 mb-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          Installation
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Install <code>@nuxthq/ui</code> dependency to your project:
        </p>
        <p>
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col items-center">
        <code>$ npm install @nuxtlabs/ui</code>
        <code>$ nnpm install -D @nuxthq/ui</code>
        <code>$ pnpm i -D @nuxthq/ui</code>
      </div>
    </template>
  </UAccordion>
</template>
