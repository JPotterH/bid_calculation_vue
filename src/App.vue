<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="app-content">
    <RouterView />
  </main>
</template>

<style scoped>
.app-content {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}
</style>
