<script setup>
import { ref } from 'vue';
import axios from 'axios';

defineProps({
  vehicleInfo: Object
})

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

function vehicleTypeEvaluator(vehicleT) {
  return vehicleTypes.value.length > 0 ? vehicleTypes.value.find(vt => vt.id === vehicleT).type : vehicleT
}

getVehicleTypes()
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img src="@/assets/gray_car.png" alt="Car picture" width="240px">  
    </div>
    <div class="card-info">
      <h3>{{ vehicleInfo.description }}</h3>
      <span><b>Base price:</b> ${{ vehicleInfo.basePrice }}</span>
      <span><b>Type:</b> {{ vehicleTypeEvaluator(vehicleInfo.type) }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
}

.card-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
</style>
