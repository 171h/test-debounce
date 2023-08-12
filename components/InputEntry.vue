<script setup lang="ts">
const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text" autocomplete="off"
      class="mt-5 w-64 border border-gray-200 rounded bg-transparent px-4 py-2 text-center outline-none dark:border-gray-700 active:outline-none"
      @keydown.enter="go"
    >
    <div>
      <button
        class="m-3 inline-block cursor-pointer rounded bg-teal-600 px-4 py-1 text-sm text-white disabled:cursor-default disabled:bg-gray-600 hover:bg-teal-700 disabled:opacity-50"
        :disabled="!name"
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>
