<script setup>
import { route } from '@/router/route';

const routeList = route

</script>

<template>
    <nav class="app-nav">
      | <RouterLink :to="routeList.home">Home</RouterLink> |
      <RouterLink :to="routeList.bidcalculator">Bid Calculator</RouterLink> |
    </nav>
  </template>
