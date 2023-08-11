<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const items = [{
  label: 'Tab1',
  content: 'This is the content shown for Tab1',
}, {
  label: 'Tab2',
  disabled: true,
  content: 'And, this is the content for Tab2',
}, {
  label: 'Tab3',
  content: 'Finally, this is the content for Tab3',
}]

const selected = computed({
  get() {
    const index = items.findIndex(item => item.label === route.query.tab)
    if (index === -1)
      return 0

    return index
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({ query: { tab: items[value].label }, hash: '#control-the-selected-index' })
  },
})

function onChange(index: number) {
  const item = items[index]

  alert(`${item.label} was clicked!`)
}
// --------------------
const items2 = [{
  label: 'Introduction',
  icon: 'i-heroicons-information-circle',
  content: 'This is the content shown for Tab1',
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'And, this is the content for Tab2',
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  content: 'Finally, this is the content for Tab3',
}]
// -------------------
const items3 = [{
  key: 'account',
  label: 'Account',
  description: 'Make changes to your account here. Click save when you\'re done.',
}, {
  key: 'password',
  label: 'Password',
  description: 'Change your password here. After saving, you\'ll be logged out.',
}]
const accountForm = reactive({ name: 'Benjamin', username: 'benjamincanac' })
const passwordForm = reactive({ currentPassword: '', newPassword: '' })

function onSubmit(form: any) {
  // eslint-disable-next-line no-console
  console.log('Submitted form:', form)
}
</script>

<template>
  <h1>Test Tabs</h1>
  <UTabs :items="items" />
  <hr>
  <UTabs v-model="selected" :items="items" @change="onChange" />
  <hr>
  <UTabs :items="items" :default-index="1" />
  <hr>
  <UTabs :items="items" orientation="vertical" :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }" />
  <hr>
  <UTabs :items="items2" class="w-full">
    <template #default="{ item, index, selected }">
      <div class="flex relative truncate items-center gap-2">
        <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
      </div>
    </template>
  </UTabs>
  <hr>
  <UTabs :items="items3" class="w-full">
    <template #item="{ item }">
      <UCard @submit.prevent="() => onSubmit(item.key === 'account' ? accountForm : passwordForm)">
        <template #header>
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ item.label }}
          </h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </template>

        <div v-if="item.key === 'account'" class="space-y-3">
          <UFormGroup label="Name" name="name">
            <UInput v-model="accountForm.name" />
          </UFormGroup>
          <UFormGroup label="Username" name="username">
            <UInput v-model="accountForm.username" />
          </UFormGroup>
        </div>
        <div v-else-if="item.key === 'password'" class="space-y-3">
          <UFormGroup label="Current Password" name="current" required>
            <UInput v-model="passwordForm.currentPassword" type="password" required />
          </UFormGroup>
          <UFormGroup label="New Password" name="new" required>
            <UInput v-model="passwordForm.newPassword" type="password" required />
          </UFormGroup>
        </div>

        <template #footer>
          <UButton type="submit" color="black">
            Save {{ item.key === 'account' ? 'account' : 'password' }}
          </UButton>
        </template>
      </UCard>
    </template>
  </UTabs>
</template>
