<script setup>

defineProps({
  fees: Object,
})
</script>

<template>
  <div class="card">
    <h3 class="name" style="padding-top: 0;">Fixed and Variable Costs Calculation</h3>
    <p><span>Vehicle Price: </span>${{ fees?.basicBuyerFee }}</p>
    <p><span>Basic buyer fee: </span>${{ fees?.basicBuyerFee }}</p>
    <p><span>Special fee: </span>${{ fees?.sellerSpecialFee }}</p>
    <p><span>Association fee: </span>${{ fees?.associationFee }}</p>
    <p><span>Storage fee: </span>${{ fees?.storageFee }}</p>
    <p><span>Total: </span>${{ fees?.totalFee }}</p>
  </div>
</template>

<style scoped></style>
