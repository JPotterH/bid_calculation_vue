import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayoutMiddleware";
import HomeView from "@/views/HomeView.vue";
import BidCalculatorView from "@/views/BidCalculatorView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { route } from "@/router/route";

const routes = [
  {
    path: route.home,
    name: "Home",
    component: HomeView,
    // meta: {
    //   layout: "AppDefaultLayout",
    // },
  },
  {
    path: route.bidcalculator,
    name: "BidCalculator",
    component: BidCalculatorView,
    // meta: {
    //   layout: "AppDefaultLayout",
    // },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
    meta: {
      layout: "AppErrorLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
