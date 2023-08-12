<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()
const toast = useToast()
function notify1() {
  toast.add({ description: 'This is a description!' })
}
function notify2() {
  toast.add({
    id: 'update_downloaded',
    title: 'Update downloaded.',
    description: 'It will be installed on restart. Restart now?',
    icon: 'i-heroicons:bell-20-solid',
    avatar: { src: 'https://avatars.githubusercontent.com/u/40647432?v=4' },
    timeout: 0,
    actions: [
      { label: 'Restart', click: () => { } },
      { variant: 'outline', color: 'primary', label: 'Action 2' }
    ],
    color: 'red'
  })
}
function notify3() {
  toast.add({})
}
function notify4() {
  toast.add({ title: 'Notification <i>italic</i>', description: 'This is an <u>underlined</u> and <b>bold</b> notification.' })
}
</script>

<template>
  <h1>Test Notification</h1>
  <UButton label="notify1" @click="notify1" />
  <UButton label="notify2" @click="notify2" />
  <UButton label="notify3" @click="notify3" />
  <UButton label="notify4" @click="notify4" />
</template>
