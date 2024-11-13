import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import waitFor from "wait-for-expect";
import VehicleListComponent from "@/components/VehicleListComponent.vue";
import { getVehicleList } from "@/services/vehicle_api";

vi.mock("@/services/vehicle_api", () => ({
  getVehicleList: vi.fn(),
}));

const wrapper = mount(VehicleListComponent);

describe("VehicleListComponent", () => {
  it("renders the user greeting", async () => {
    await waitFor(() => {
      expect(wrapper.get("#vehicle-list-heading").text()).toBe(
        "Available vehicles"
      );
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

    getVehicleList.mockResolvedValue(mockVehicles);

    const vehicleList = wrapper.get("#vehicle-list");
    await wrapper.vm.$nextTick();

    await vi.waitFor(
      () => vehicleList.findAll(".vehicle-list-item").length > 0
    );
    // await vi.waitFor(() => {
    const vehicleItems = vehicleList.findAll(".vehicle-list-item");
    console.log(vehicleItems);

    // expect(vehicleItems.at(0)?.text()).toBe("The Lord of The Rings");
    // expect(vehicleItems.at(1)?.text()).toBe("The Matrix");
    expect(vehicleItems.length).toBe(mockVehicles.length);
    // });
  });

  // it("testing HomeView component props", async () => {
  //   await wrapper.setProps({ title: "Guess User Age App" });
  //   expect(wrapper.find('h1').text()).toBe('Hello World');

  //   expect(HomeView.props.title).toContain("Guess User Age App");
  // });

  // it("Test if data is a function", () => {
  //   expect(typeof HomeView.data).toBe("function");
  // });
});
