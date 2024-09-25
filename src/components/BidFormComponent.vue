<script setup>
import { ref } from 'vue';
import axios from 'axios';

import VehicleFeesCard from '@/components/VehicleFeesCard.vue'

defineProps({
  vehicleTypes: Array,
})

const priceBid = ref(1)
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
    })
    .catch((error) => {
      alertMessage = error.response.data
      vehicleFees.value = {}
    });
}

</script>

<template>
  <div class="bid-calculator">
    <form class="form bid-form">
      <h3 style="margin-bottom: 0;">Bid Calculator</h3>
      <label>Bid amount:</label>
      <input v-model="priceBid" type="number">
      <label>Vehicle type:</label>
      <select v-model="selectedType">
        <option v-for="type in vehicleTypes" :value="type.id">
          {{ type.type }}
        </option>
      </select>
      <p>{{ alertMessage }}</p>
      <button @click="calculateBid" class="btn-prm" type="submit">Calculate bid</button>
    </form>
    <VehicleFeesCard :fees="vehicleFees"/>
  </div>
</template>

<style scoped>
.bid-calculator{
  display: flex;
}

.bid-form{
  display: flex;
  flex-direction: column;
}
label {
  padding-top: 2rem;
}

select {
  padding: 2px;
  margin-bottom: 2rem;
}
</style>
