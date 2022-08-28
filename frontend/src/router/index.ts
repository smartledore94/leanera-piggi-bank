import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import PenaltyView from "../views/PenaltyView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
  {
    path: "/penalty",
    name: "penalty",
    component: PenaltyView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  /*
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => */
      /* webpackChunkName: "about" */
      /*import( "../views/AboutView.vue"),
  },
  */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
