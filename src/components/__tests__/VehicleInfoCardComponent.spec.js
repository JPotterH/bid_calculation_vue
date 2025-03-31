import VehicleInfoCardComponent from "@/components/VehicleInfoCardComponent.vue";
import { vehicleTypeDataStore } from "@/store/vehicleTypeStore";

import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";

vi.mock("@/store/vehicleTypeStore", () => ({
  vehicleTypeDataStore: vi.fn(),
}));

describe("VehicleInfoCardComponent", () => {
  let mockStore;

  beforeEach(() => {
    setActivePinia(createPinia());

    // Create a mock store instance
    mockStore = {
      getVehicleType: vi.fn().mockImplementation(() => Promise.resolve([])),
    };

    // Ensure the mocked store is returned when called
    vehicleTypeDataStore.mockReturnValue(mockStore);
  });

  it("renders vehicle details correctly before and after async update", async () => {
    const vehicleInfo = {
      description: "Rolls Royce Phantom",
      basePrice: 709999,
      type: 2,
    };

    mockStore.getVehicleType.mockResolvedValue("Luxury");

    const wrapper = mount(VehicleInfoCardComponent, {
      props: { vehicleInfo },
    });

    // Initial render before async update
    expect(wrapper.find("h3").text()).toBe("Rolls Royce Phantom");
    expect(wrapper.find(".card-info-price").text()).toContain("$709999");
    expect(wrapper.find(".card-info-type").text()).toContain(2);

    // Wait for async update
    await wrapper.vm.$nextTick();
    await new Promise((r) => setTimeout(r, 0));

    // Ensure the vehicle type changed after async update
    expect(wrapper.find(".card-info-type").text()).toContain("Luxury");
  });

  it("handles missing vehicle type gracefully", async () => {
    const vehicleInfo = {
      description: "Toy Car",
      basePrice: 15,
      type: 3,
    };

    // Simulate API returning no data
    mockStore.getVehicleType.mockResolvedValue([]);

    const wrapper = mount(VehicleInfoCardComponent, {
      props: { vehicleInfo },
    });

    await wrapper.vm.$nextTick();
    await new Promise((r) => setTimeout(r, 0));

    // Should handle missing type gracefully
    expect(wrapper.find(".card-info span:nth-child(2)").text()).toContain("");
  });
});
