<script setup>
import BidFormComponent from '@/components/BidFormComponent.vue'
</script>

<template>
  <div class="calculator-container">
    <div class="bid-calculator">
      <BidFormComponent />
    </div>
  </div>
</template>

<style scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #bbb9b9;
}

.bid-calculator {
  display: flex;
  justify-content: space-around;
}
</style>
