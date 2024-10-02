// store.js
import { defineStore } from "pinia";
import axios from "axios";

const cancelTokenSources = [];

export const vehicleTypeDataStore = defineStore("vehicleTypeData", {
  state: () => ({
    vehicleTypes: new Map(),
  }),
  actions: {
    async getVehicleType(type = 0) {
      if (this.vehicleTypes.size === 0) {
        const source = axios.CancelToken.source();
        cancelTokenSources.push(source);

        await axios
          .get("VehicleType", {
            cancelToken: source.token,
          })
          .then((response) => {
            cancelTokenSources.forEach((tokenSource) => {
              if (tokenSource !== source) {
                tokenSource.cancel("Request canceled");
              }
            });
            response.data.forEach((vType) => {
              this.vehicleTypes.set(vType.id, vType.type);
            });
          })
          .catch((error) => console.log(error));
      }

      if (type === 0) return this.vehicleTypes;

      return this.vehicleTypes.get(type);
    },
  },
});
