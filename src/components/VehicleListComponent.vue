<script setup>
import { ref } from "vue";
import { getVehicleList } from "@/services/vehicle_api";

import VehicleInfoCardComponent from "@/components/VehicleInfoCardComponent.vue";

const vehiclesInfo = ref([]);

const listVehicles = async () => {
  const data = await getVehicleList();
  vehiclesInfo.value = data;
};

listVehicles();
</script>

<template>
  <div class="vehicle-list-container">
    <h2 id="vehicle-list-heading">Available vehicles</h2>
    <div>
      <div id="vehicle-list" class="vehicle-list">
        <div
          :id="'vehicle_card_' + vehicle.id"
          v-bind:key="vehicle.id"
          v-for="vehicle in vehiclesInfo"
          class="vehicle-list-item"
        >
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
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  padding: 12px;
}

.vehicle-list-item {
  min-width: 220px;
  border: 2px solid rgba(189, 182, 182, 0.8);
  margin: 12px auto;
}
</style>
