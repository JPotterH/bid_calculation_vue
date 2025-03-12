<script setup>
import { onMounted, reactive, toRefs } from 'vue';
import { vehicleTypeDataStore } from '@/store/vehicleTypeStore.js'

const props = defineProps({
  vehicleInfo: {
    type: Object,
    required: true
  }
})
const modifiedVehicleInfo = reactive({ ...props.vehicleInfo });
const vTypeDataStore = vehicleTypeDataStore();

onMounted(async () => {
  modifiedVehicleInfo.type = await vTypeDataStore.getVehicleType(props.vehicleInfo.type);
});

const { type  } = toRefs(modifiedVehicleInfo);
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img src="@/assets/gray_car.png" class="card-img" alt="Car picture">  
    </div>
    <div class="card-info">
      <h3>{{ vehicleInfo.description }}</h3>
      <span><b>Base price:</b> ${{ vehicleInfo.basePrice }}</span>
      <span><b>Type:</b> {{ modifiedVehicleInfo.type }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
}

.card-img {
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
}

.card-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
</style>
