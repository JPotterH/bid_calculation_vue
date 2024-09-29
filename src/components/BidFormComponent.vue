<script setup>
import { ref } from 'vue';
import axios from 'axios';

import VehicleFeesComponent from '@/components/VehicleFeesComponent.vue'

defineProps({
  vehicleTypes: Array,
})

const priceBid = ref(1)
let bid = 0
const selectedType = ref(1)
const vehicleFees = ref({})
let alertMessage = ''

function calculateBid(event) {
  event.preventDefault();
  alertMessage = '';

  axios
    .get(`VehicleFee?bidOffer=${priceBid.value}&vehicleType=${selectedType.value}`)
    .then(response => {
      vehicleFees.value = response.data
      bid = priceBid.value
    })
    .catch((error) => {
      alertMessage = error.response.data.title ? error.response.data.title : error.response.data
      vehicleFees.value = {}
      bid = 0
    });
}

</script>

<template>
  <div class="bid-calculator">
    <form class="form bid-form">
      <h3 style="margin-bottom: 0;">Bid Calculator</h3>
      <label>Bid amount:</label>
      <input v-model="priceBid" type="number" min="1" step=".01">
      <label>Vehicle type:</label>
      <select v-model="selectedType">
        <option v-for="type in vehicleTypes" :value="type.id">
          {{ type.type }}
        </option>
      </select>
      <p>{{ alertMessage }}</p>
      <button @click="calculateBid" class="btn-prm" type="submit">Calculate bid</button>
    </form>
    <VehicleFeesComponent :fees="vehicleFees" :bidOffer="bid" />
  </div>
</template>

<style scoped>
.bid-calculator {
  display: flex;
  column-gap: 60px;
}

.bid-form {
  display: flex;
  flex-direction: column;
}

label {
  padding-top: 24px;
}

select {
  padding: 2px;
  margin-bottom: 24px;
}
</style>
