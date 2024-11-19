import VehicleListComponent from "@/components/VehicleListComponent.vue";
import { getVehicleList } from "@/services/vehicle_api";

import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import waitFor from "wait-for-expect";

vi.mock("@/services/vehicle_api", () => ({
  getVehicleList: vi.fn().mockImplementation(() => Promise.resolve([])),
  getVehicleTypeList: vi.fn().mockImplementation(() => Promise.resolve([])),
}));

describe("VehicleListComponent", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("renders the user greeting", async () => {
    const wrapper = mount(VehicleListComponent);
    const mockVehicles = [
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
      // {
      //   id: 6,
      //   basePrice: 1000000,
      //   description: "Mint condition luxury vehicle",
      //   type: 2,
      // },
    ];

    getVehicleList.mockResolvedValue(mockVehicles);
    await waitFor(() => {
      expect(wrapper.get("#vehicle-list-heading").text()).toBe("Available vehicles");
    });
  });

  it("renders the list of vehicles", async () => {
    const mockVehicles = [
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
      // {
      //   id: 6,
      //   basePrice: 1000000,
      //   description: "Mint condition luxury vehicle",
      //   type: 2,
      // },
    ];

    // Mount the component
    const wrapper = mount(VehicleListComponent, {
      global: {
        stubs: {
          VehicleInfoCardComponent: true, // Stub the child component
        },
      },
    });

    // Wait for the API call and component update
    await wrapper.vm.$nextTick();
    await vi.waitFor(() => {
      const items = wrapper.findAll(".vehicle-list-item");
      return items.length === mockVehicles.length;
    });

    // Verify API was called
    expect(getVehicleList).toHaveBeenCalled();

    // Get the rendered items
    const vehicleItems = wrapper.findAll(".vehicle-list-item");

    // Verify the number of items
    expect(vehicleItems.length).toBe(mockVehicles.length);

    // If you want to verify the content, you might need to adjust this based on your actual rendering
    mockVehicles.forEach((vehicle, index) => {
      const item = vehicleItems[index];
      expect(item.attributes("id")).toBe(`vehicle_card_${vehicle.id}`);
    });
  });
});
