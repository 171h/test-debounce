<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
    <hr>
    <TestAccordion />
    <TestDefineShortcuts />
    <TestAlert />
    <TestAvatar />
    <TestBadge />
    <TestButton />
    <TestDropdown />
    <TestIcon />
    <TestKbd />
    <TestLink />
    <TestInput />
    <TestTextarea />
    <TestSelect />
    <TestSelectMenu />
    <TestCheckbox />
    <TestRadio />
    <TestToggle />
    <TestRange />
    <TestFormGroup />
    <TestForm />
    <TestTable />
    <TestVNav />
    <TestComPalette />
    <TestTabs />
  </div>
</template>

<style>
h1 {
  text-align: left;
  font-weight: bold;
  margin-top: 1rem;
}
h1::before {
  content: '🧪';
  margin-right: 0.5rem;
}
</style>
