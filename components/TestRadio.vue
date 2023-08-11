<script setup lang="ts">
const methods = [{
  name: 'email',
  value: 'email',
  label: 'Email',
}, {
  name: 'sms',
  value: 'sms',
  label: 'Phone (SMS)',
}, {
  name: 'push',
  value: 'push',
  label: 'Push notification',
}]

const selected = ref('sms')
</script>

<template>
  <h1>Test Radio</h1>
  <URadio v-for="method of methods" :key="method.name" v-model="selected" v-bind="method" />
  <hr>
  <URadio label="Label" />
  <URadio color="primary" />
  <URadio label="Label" required />
  <URadio label="Label" help="Please choose one" />
  <URadio disabled />
</template>
