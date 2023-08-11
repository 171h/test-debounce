<script setup lang="ts">
const countries = ['United States', 'Canada', 'Mexico']
const countries2 = [{
  name: 'United States',
  value: 'US',
}, {
  name: 'Canada',
  value: 'CA',
  disabled: true,
}, {
  name: 'Mexico',
  value: 'MX',
}]

const country = ref(countries[0])
const country2 = ref('CA')
</script>

<template>
  <h1>Test Select</h1>
  <USelect v-model="country" :options="countries" />
  <!-- When using objects, you can configure which field will be used for display through
    the option-attribute prop that defaults to label and which field will be used for
    comparison through the value-attribute prop that defaults to value. -->
  <USelect v-model="country2" :options="countries2" option-attribute="name" />
  <USelect v-model="country2" :options="countries2" option-attribute="name" color="primary" variant="outline" />
  <USelect v-model="country2" :options="countries2" option-attribute="name" color="white" variant="outline" />
  <USelect v-model="country2" :options="countries2" option-attribute="name" color="gray" variant="outline" />
  <USelect v-model="country2" :options="countries2" option-attribute="name" size="sm" />
  <USelect v-model="country2" :options="countries2" option-attribute="name" placeholder="Search..." />
  <USelect v-model="country2" :options="countries2" option-attribute="name" icon="i-heroicons-magnifying-glass-20-solid" color="white" size="sm" />
  <USelect v-model="country2" :options="countries2" option-attribute="name" disabled />
  <USelect v-model="country2" :options="countries2" option-attribute="name" loading icon="i-heroicons-magnifying-glass-20-solid" />

  <USelect>
    <template #leading>
      <UAvatar src="https://avatars.githubusercontent.com/u/40647432?v=4" size="3xs" />
    </template>
  </USelect>

  <USelect>
    <template #trailing>
      <UIcon name="i-heroicons-arrows-up-down-20-solid" />
    </template>
  </USelect>
</template>
