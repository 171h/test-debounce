<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="my-3 inline-flex">
    <button class="inline-block cursor-pointer rounded-full bg-teal-600 p-2 px-4 py-1 text-white disabled:cursor-default disabled:bg-gray-600 hover:bg-teal-700 disabled:opacity-50" @click="dec()">
      <div i-carbon-subtract />
    </button>
    <div class="m-auto inline-block w-14 font-mono">
      {{ count }}
    </div>
    <button class="inline-block cursor-pointer rounded-full bg-teal-600 p-2 px-4 py-1 text-white disabled:cursor-default disabled:bg-gray-600 hover:bg-teal-700 disabled:opacity-50" @click="inc()">
      <div i-carbon-add />
    </button>
  </div>
</template>
