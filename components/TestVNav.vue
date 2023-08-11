<script setup lang="ts">
const links = [
  {
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    },
    badge: 100,
  },
  {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation',
  },
  {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '/navigation/vertical-navigation',
  },
  {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/navigation/command-palette',
  },
]

const links2 = [{
  label: 'Navigation',
  children: [{
    label: 'Vertical Navigation',
    to: '/navigation/vertical-navigation',
  }, {
    label: 'Command Palette',
    to: '/navigation/command-palette',
  }],
}, {
  label: 'Data',
  children: [{
    label: 'Table',
    to: '/data/table',
  }],
}]
const links3 = [
  {
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    },
    label: 'Benjamin Canac',
  },
  {
    label: 'KeJun',
  }]
const { ui } = useAppConfig()

type Type = 'bug' | 'docs' | 'lock' | 'default'
const types4 = {
  bug: {
    icon: 'i-heroicons-bug-ant-20-solid',
    color: 'text-red-500',
  },
  docs: {
    icon: 'i-heroicons-document-text-20-solid',
    color: 'text-blue-500',
  },
  lock: {
    icon: 'i-heroicons-lock-closed-20-solid',
    color: 'text-gray dark:text-white',
  },
  default: {
    icon: 'i-heroicons-question-mark-circle-20-solid',
    color: 'text-green-500',
  },
}
const links4 = [{
  label: 'UDropdown and UPopover dropdown menu, dropdown will be obscured',
  type: 'bug',
}, {
  label: 'Uncaught (in promise) ReferenceError: ref is not defined',
  type: 'lock',
}, {
  label: 'Fully styled and customizable components for Nuxt.',
  type: 'docs',
}, {
  label: 'Can I pass a tailwind color to UNotifications with `toast.add()` ?',
}]

const links5 = [{
  label: '.github',
  icon: 'i-heroicons-folder-20-solid',
  badge: 'chore(github): use pnpm 8',
  time: 'last month',
}, {
  label: '.editorconfig',
  icon: 'i-heroicons-document-solid',
  badge: 'Initial commit',
  time: '2 years ago',
}, {
  label: '.package.json',
  icon: 'i-heroicons-document-solid',
  badge: 'chore(deps): bump',
  time: '16 hours ago',
}]
</script>

<template>
  <h1>Test Vertical Navigation</h1>
  <UVerticalNavigation :links="links" />
  <hr>
  <UVerticalNavigation :links="links2">
    <template #default="{ link }">
      <div class="relative text-left w-full">
        <div class="mb-2">
          {{ link.label }}
        </div>
        <UVerticalNavigation v-if="link.children" :links="link.children" />
      </div>
    </template>
  </UVerticalNavigation>
  <hr>
  <UVerticalNavigation :links="links3">
    <template #avatar="{ link }">
      <UAvatar
        v-if="link.avatar"
        v-bind="{ size: ui.verticalNavigation.avatar.size, ...link.avatar }"
        :class="[ui.verticalNavigation.avatar.base]"
      />
      <UIcon v-else name="i-heroicons-user-circle-20-solid" class="text-lg" />
    </template>
  </UVerticalNavigation>
  <hr>
  <UVerticalNavigation :links="links4">
    <template #icon="{ link }">
      <UIcon v-if="link.type" :name="types4[link.type as Type].icon" :class="types4[link.type as Type].color" class="text-base" />
      <UIcon v-else :name="types4.default.icon" :class="types4.default.color" class="text-base" />
    </template>
  </UVerticalNavigation>
  <hr>
  <UVerticalNavigation
    :links="links5"
    class="w-full"
    :ui="{
      label: 'truncate relative text-gray-900 dark:text-white flex-initial w-32 text-left',
    }"
  >
    <template #badge="{ link }">
      <div class="flex-1 flex justify-between relative truncate">
        <div>{{ link.badge }}</div>
        <div>{{ link.time }}</div>
      </div>
    </template>
  </UVerticalNavigation>
</template>
