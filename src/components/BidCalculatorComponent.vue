<script setup>
import { ref } from 'vue';
import axios from 'axios';

import BidFormComponent from '@/components/BidFormComponent.vue'

const vehicleTypes = ref([])

const getVehicleTypes = () => {
  axios
    .get('VehicleType')
    .then(response => {
      vehicleTypes.value = response.data
    })
    .catch(error => console.log(error)
    );
}

getVehicleTypes()
</script>

<template>
  <div class="calculator-container">
    <div class="bid-calculator">
      <BidFormComponent :vehicleTypes="vehicleTypes" />
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
