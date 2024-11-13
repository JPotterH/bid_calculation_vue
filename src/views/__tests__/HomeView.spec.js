import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import waitFor from "wait-for-expect";
import HomeView from "@/views/HomeView.vue";
import { getVehicleList } from "@/services/vehicle_api";

vi.mock("@/services/vehicle_api", () => ({
  getVehicleList: vi.fn(),
}));

const wrapper = mount(HomeView);

describe("HomeView", () => {
  it("renders the view header", async () => {
    getVehicleList.mockResolvedValue([]);

    await waitFor(() => {
      expect(wrapper.get("h1").text()).toBe("Home");
    });
  });
});
