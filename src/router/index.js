import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import EventCreate from "../views/EventCreate.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
  {
    path: "/created",
    name: "Created",
    component: EventCreate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
