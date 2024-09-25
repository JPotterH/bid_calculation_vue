<script setup>
import { ref } from 'vue';
import axios from 'axios';

import BidFormComponent from '@/components/BidFormComponent.vue'

const vehiclesInfo = ref([])
let selectedVehicleId = 0
const vehicleTypes = ref([])

function vehicleTypeEvaluator(vehicleT) {
  return vehicleTypes.value.length > 0 ? vehicleTypes.value.find(vt => vt.id === vehicleT).type : vehicleT
}

const getVehicleTypes = () => {
  axios
    .get('VehicleType')
    .then(response => {
      vehicleTypes.value = response.data
    })
    .catch(error => console.log(error)
    );
}

const getVehicleList = () => {
  axios
    .get('Vehicle')
    .then(response => {
      vehiclesInfo.value = response.data
    })
    .catch(error => console.log(error)
    );
}

getVehicleTypes()
getVehicleList();
</script>

<template>
  <div class="calculator-container">
    <div class="vehicle-list">
      <h2>Available vehicles</h2>
      <ul>
        <li v-bind:key="vehicle.id" v-for="vehicle in vehiclesInfo" class="list-item">
          <span>{{ vehicle.description }}</span>
          <span><b>Base price:</b> ${{ vehicle.basePrice }}</span>
          <span><b>Type:</b> {{ vehicleTypeEvaluator(vehicle.type) }}</span>
        </li>
      </ul>
    </div>
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

.list-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
