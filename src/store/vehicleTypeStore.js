import { defineStore } from "pinia";
import { getVehicleTypeList } from "@/services/vehicle_api";

export const vehicleTypeDataStore = defineStore("vehicleTypeData", {
  state: () => ({
    vehicleTypes: new Map(),
  }),
  actions: {
    async getVehicleType(type = 0) {
      if (this.vehicleTypes.size === 0) {
        const vTypes = await getVehicleTypeList();
        vTypes.forEach((vType) => {
          this.vehicleTypes.set(vType.id, vType.type);
        });
      }

      if (type === 0) return this.vehicleTypes;

      return this.vehicleTypes.get(type);
    },
  },
});
