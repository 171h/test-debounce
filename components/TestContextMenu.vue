<script setup lang="ts">
const { x, y } = useMouse()
const { y: windowY } = useWindowScroll()

const isOpen = ref(true)
const virtualElement = ref({ getBoundingClientRect: () => ({}) })


function onContextMenu() {
  const top = unref(y) - unref(windowY)
  const left = unref(x)

  virtualElement.value.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top,
    left
  })

  isOpen.value = true
}
</script>

<template>
  <h1>Test Context Menu</h1>
  <div class="h-48 w-full bg-slate-100" @contextmenu.prevent="onContextMenu">
    <UContextMenu v-model="isOpen" :virtual-element="virtualElement">
      <Placeholder class="h-10 w-10" />
    </UContextMenu>
  </div>
</template>
