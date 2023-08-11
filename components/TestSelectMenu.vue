<script setup lang="ts">
const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox',
  'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']
const people10 = [{
  id: '171h',
  label: '171h',
  href: 'https://github.com/171h',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/40647432?v=4' },
},
{
  id: 'Atinux',
  label: 'Atinux',
  href: 'https://github.com/Atinux',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/904724?v=4' },
},
{
  id: 'smarroufin',
  label: 'smarroufin',
  href: 'https://github.com/smarroufin',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/7547335?v=4' },
},
{
  id: 'nobody',
  label: 'Nobody',
  icon: 'i-heroicons-user-circle',
}]

const people20 = [{
  id: 1,
  name: 'Wade Cooper',
}, {
  id: 2,
  name: 'Arlene Mccoy',
}, {
  id: 3,
  name: 'Devon Webb',
}, {
  id: 4,
  name: 'Tom Cook',
}]

const selected = ref(people[0])
const selected2 = ref([])
const selected10 = ref(people10[0])
const selected20 = ref(people20[0].id)
const current20 = computed(() => people20.find(person => person.id === selected20.value))

async function search(q: string) {
  const users = await $fetch('https://jsonplaceholder.typicode.com/users', { params: { q } }) as any

  return users.map((user: any) => ({ id: user.id, label: user.name, suffix: user.email })).filter(Boolean)
}
const selected30 = ref([])
</script>

<template>
  <h1>Test Select Menu</h1>
  <USelectMenu v-model="selected" :options="people" />
  <USelectMenu v-model="selected" :options="people" selected-icon="i-heroicons-hand-thumb-up-solid" />
  <USelectMenu v-model="selected" :options="people" :searchable="true" searchable-placeholder="Search a person..." />
  <USelectMenu
    v-model="selected30"
    :searchable="search"
    placeholder="Search for a user..."
    multiple
    by="id"
  />
  <USelectMenu v-slot="{ open }" v-model="selected" :options="people">
    <UButton color="gray">
      {{ selected }}
      <UIcon name="i-heroicons-chevron-right-20-solid" class="h-5 w-5 transition-transform" :class="[open && 'transform rotate-90']" />
    </UButton>
  </USelectMenu>

  <USelectMenu v-model="selected2" :options="people" multiple placeholder="Select people" />
  <USelectMenu v-model="selected2" :options="people" multiple placeholder="Select people">
    <template #label>
      <span v-if="selected2.length" class="truncate">{{ selected2.join(', ') }}</span>
      <span v-else>Select people</span>
    </template>
  </USelectMenu>

  <USelectMenu v-model="selected10" :options="people10">
    <template #label>
      <UIcon v-if="selected10.icon" :name="selected10.icon" class="h-4 w-4" />
      <UAvatar v-else-if="selected10.avatar" v-bind="selected10.avatar" size="3xs" />

      {{ selected10.label }}
    </template>
  </USelectMenu>

  <USelectMenu
    v-model="selected20"
    :options="people20"
    placeholder="Select people"
    value-attribute="id"
    option-attribute="name"
  >
    <template #label>
      {{ current20?.name }}
    </template>
  </USelectMenu>
</template>
