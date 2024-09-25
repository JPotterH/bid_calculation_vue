<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BidCalculatorComponent from '@/components/BidCalculatorComponent.vue'
</script>

<template>
  <div>
    <HeaderComponent />
    <div class="d-flex justify-content-center">
      <div class="content">
        <div class="w-100">
          <BidCalculatorComponent />
        </div>
      </div>
    </div>
  </div>
</template>
