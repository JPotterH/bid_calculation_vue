/**
 * This middleware is used to dynamically update the Layouts system.
 *
 * As soon as the route changes, it tries to pull out the layout that
 * we want to display from the route. Then it loads the layout component,
 * and assigns the loaded component to the meta in the layoutComponent
 * variable. And layoutComponent is used in the base layout AppLayout.vue,
 * where the dynamic one updates the layout component
 *
 * If the layout we want to display is not found, it loads the default
 * layout AppDefaultLayout.vue
 * */

export async function loadLayoutMiddleware(route) {
  try {
    let layout = route.meta.layout || "AppDefaultLayout";

    let layoutComponent = await import(`@/layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  } catch (e) {
    console.error("Error occurred in processing of layouts: ", e);
    console.log("Mounted AppDefaultLayout");
    let layout = "AppDefaultLayout";
    let layoutComponent = await import(`@/layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  }
}
