import { createRouter, createWebHistory, routerKey } from "vue-router";
import Articles from "../views/Articles";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles/",
    name: "Articles",
    component: Articles,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
