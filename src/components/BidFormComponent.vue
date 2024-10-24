<script setup>
import { onMounted, ref } from 'vue';
import { getVehicleBidFees } from "@/services/vehicle_api";
import { vehicleTypeDataStore } from '@/store/vehicleTypeStore.js'

import VehicleFeesComponent from '@/components/VehicleFeesComponent.vue'

const vTypeDataStore = vehicleTypeDataStore();
let vehicleTypes = ref(new Map())
const priceBid = ref(1)
const selectedType = ref(1)
const vehicleFees = ref({})
let alertMessage = ''

onMounted(async () => {
  vehicleTypes.value = await vTypeDataStore.getVehicleType();
});

async function calculateBid(event) {
  event.preventDefault();

  const { fees, message } = await getVehicleBidFees(priceBid.value, selectedType.value);
  vehicleFees.value = fees;
  alertMessage = message;
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
        <option v-for="value in vehicleTypes" :key="value[0]" :value="value[0]">
          {{ value[1] }}
        </option>
      </select>
      <p>{{ alertMessage }}</p>
      <button @click="calculateBid" class="btn-prm" type="submit">Calculate bid</button>
    </form>
    <VehicleFeesComponent :fees="vehicleFees" />
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
