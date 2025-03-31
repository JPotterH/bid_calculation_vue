<script setup>
import AppContainerLayout from '@/layouts/AppContainerLayout.vue';
</script>

<template>
  <main class="app-content">
    <AppContainerLayout>
      <RouterView />
    </AppContainerLayout>
  </main>
</template>

<style scoped>
.app-content {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}
</style>
