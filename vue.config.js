import { defineConfig } from "@vue/cli-service";

export default defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
  },
});
