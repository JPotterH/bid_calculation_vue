<script setup>
import { ref, computed } from 'vue'
import HomeView from '@/views/HomeView.vue'
import BidCalculatorView from '@/views/BidCalculatorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = {
  '/': HomeView,
  '/calculator': BidCalculatorView
}

const currentPath = ref(window.location.pathname)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.pathname
})

const currentView = computed(() => {
  return routes[currentPath.value] || NotFoundView
})
</script>

<template>
  <div class="app-nav">
    | <a href="/">Home</a> |
    <a href="/calculator">Bid Calculator</a> |
  </div>
  <div class="app-content">
    <component :is="currentView" />
  </div>
</template>

<style scoped>
.app-nav {
  display: flex;
  justify-content: space-around;
  width: 400px;
  padding: 16px;
  margin: auto;
}

.app-content {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}
</style>
