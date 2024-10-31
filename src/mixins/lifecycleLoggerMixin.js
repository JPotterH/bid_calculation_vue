export const lifecycleLoggerMixin = {
  mounted() {
    console.log(this.$options.name + " mounted");
  },
  unmounted() {
    console.log(this.$options.name + " unmounted");
  },
};
