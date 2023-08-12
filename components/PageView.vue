<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div class="text-gray-400">
    <span class="font-500 text-gray-400">{{ data?.pageview }}</span>
    page views since
    <span class="text-gray-400">{{ time }}</span>
  </div>
</template>
