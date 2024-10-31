/**
 * Эта мидлварка используется для динамического обновления системы Layouts.
 * This middleware is used to dynamically update the Layouts system.
 *
 * Как только измениться route пытается из роута вытащить layout который мы хотим отобразить. Потом загружает компонент лейаута, и присваивает загруженный компонент к мете в переменную layoutComponent. А layoutComponent используется в базовым лейауте AppLayout.vue, там динамический обновляет компонент лейаута
 * As soon as the route changes, it tries to pull out the layout that we want to display from the route. Then it loads the layout component, and assigns the loaded component to the meta in the layoutComponent variable. And layoutComponent is used in the base layout AppLayout.vue, where the dynamic one updates the layout component
 *
 * Если не найден layout который мы хотим отобразить, загружает дефолтный лейаут AppDefaultLayout.vue
 * If the layout we want to display is not found, it loads the default layout AppDefaultLayout.vue
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
