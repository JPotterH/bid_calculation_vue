import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const cancelTokenSources = [];

export const getVehicleList = async () => {
  const result = await api
    .get("Vehicle")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("getVehicleList");
      console.log(error);
      return [];
    });
  return result;
};

export const getVehicleTypeList = async () => {
  const source = axios.CancelToken.source();
  cancelTokenSources.push(source);

  const result = await api
    .get("VehicleType", {
      cancelToken: source.token,
    })
    .then((response) => {
      cancelTokenSources.forEach((tokenSource) => {
        if (tokenSource !== source) {
          tokenSource.cancel("Request canceled");
        }
      });
      return response.data;
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });

  return result;
};

export const getVehicleBidFees = async (priceBid, selectedType) => {
  const result = await api
    .get(`VehicleFee?bidOffer=${priceBid}&vehicleType=${selectedType}`)
    .then((response) => {
      return { fees: response.data, message: "" };
    })
    .catch((error) => {
      return {
        fees: {},
        message: error.response.data.title ? error.response.data.title : error.response.data,
      };
    });

  return result;
};
