import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BidCalculatorView from "@/views/BidCalculatorView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { route } from "@/router/route";

const routes = [
  {
    path: route.home,
    name: "Home",
    component: HomeView,
  },
  {
    path: route.bidcalculator,
    name: "BidCalculator",
    component: BidCalculatorView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
