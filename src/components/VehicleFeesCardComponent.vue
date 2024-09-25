<script setup>

defineProps({
  fees: Object,
  bidOffer: Number
})

const calculateTotalPrice = (totalFee, bid) => { 
  return totalFee > 0 && bid > 0 ? (parseFloat(totalFee) + bid) : '';
}
</script>

<template>
  <div class="card">
    <h3 style="padding-top: 0;">Fixed and Variable Costs Calculation</h3>
    <p><span>Vehicle Price: </span>${{ bidOffer?.toFixed(2) }}</p>
    <p><span>Basic buyer fee: </span>${{ fees?.basicBuyerFee?.toFixed(2) }}</p>
    <p><span>Special fee: </span>${{ fees?.sellerSpecialFee?.toFixed(2) }}</p>
    <p><span>Association fee: </span>${{ fees?.associationFee?.toFixed(2) }}</p>
    <p><span>Storage fee: </span>${{ fees?.storageFee?.toFixed(2) }}</p>
    <p><span>Total price: </span>${{ calculateTotalPrice(fees?.totalFee, bidOffer) }}</p>
  </div>
</template>

<style scoped></style>
