import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Recommendations from "../views/Recommendations.vue";
import Survey from "../views/Survey.vue";
import Courses from "../views/Courses.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/recommendations",
    name: "Recommendations",
    component: Recommendations,
  },
  {
    path: "/survey",
    name: "Survey",
    component: Survey,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
