import { http, HttpResponse } from "msw";

const baseUrl = import.meta.env.VITE_BASE_URL;
const vehicles = [
  {
    id: 1,
    basePrice: 397.75,
    description: "Spare parts vehicle",
    type: 1,
  },
  {
    id: 2,
    basePrice: 501,
    description: "Accidented common vehicle",
    type: 1,
  },
  {
    id: 3,
    basePrice: 57,
    description: "Popeye's toy vehicle",
    type: 1,
  },
  {
    id: 4,
    basePrice: 1800,
    description: "Partially damaged luxury vehicle",
    type: 2,
  },
  {
    id: 5,
    basePrice: 1100,
    description: "Second hand common vehicle",
    type: 1,
  },
  {
    id: 6,
    basePrice: 1000000,
    description: "Mint condition luxury vehicle",
    type: 2,
  },
];

export const restHandlers = [
  http.get(`${baseUrl}Vehicle`, () => {
    console.log("mocks/handlers.js");

    return HttpResponse.json(vehicles);
  }),
];
