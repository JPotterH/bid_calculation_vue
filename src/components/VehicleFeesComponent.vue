<script setup>
  defineProps({
    fees: Object
  })
</script>

<template>
  <div>
    <h3 class="fees-title">Fixed and Variable Costs Calculation</h3>
    <p><span>Vehicle Price: </span>${{ fees?.bid?.toFixed(2) }}</p>
    <p><span>Basic buyer fee: </span>${{ fees?.basicBuyerFee?.toFixed(2) }}</p>
    <p><span>Special fee: </span>${{ fees?.sellerSpecialFee?.toFixed(2) }}</p>
    <p><span>Association fee: </span>${{ fees?.associationFee?.toFixed(2) }}</p>
    <p><span>Storage fee: </span>${{ fees?.storageFee?.toFixed(2) }}</p>
    <p><span>Total price: </span>${{ fees?.totalBid?.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
.fees-title {
  padding-top: 0;
}
</style>
