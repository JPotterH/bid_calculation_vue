<script setup>
import { ref } from 'vue';
import axios from 'axios';

import VehicleInfoCardComponent from '@/components/VehicleInfoCardComponent.vue'

const vehiclesInfo = ref([])

const getVehicleList = () => {
  axios
    .get('Vehicle')
    .then(response => {
      vehiclesInfo.value = response.data
    })
    .catch(error => console.log(error)
    );
}

getVehicleList();
</script>

<template>
  <div class="vehicle-list-container">
    <h2>Available vehicles</h2>
    <div>
      <div class="vehicle-list">
        <div v-bind:key="vehicle.id" v-for="vehicle in vehiclesInfo" class="list-item">
          <VehicleInfoCardComponent :vehicleInfo="vehicle" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vehicle-list-container {
  width: 100%;
}

.vehicle-list {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 12px;
}

.list-item {
  max-width: 240px;
  border: 2px solid rgba(189, 182, 182, 0.8);
  margin: 12px;
}
</style>
