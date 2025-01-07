import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import JobsPage from "@/pages/JobsPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import JobDetailPage from "@/pages/JobDetailPage.vue";
import AddJobPage from "@/pages/AddJobPage.vue";
import EditJobPage from "@/pages/EditJobPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsPage,
    },
    {
      path: "/jobs/add",
      name: "add-jobs",
      component: AddJobPage,
    },
    {
      path: "/job/:id",
      name: "job",
      component: JobDetailPage,
    },
    {
      path: "/job/:id/edit",
      name: "edit-job",
      component: EditJobPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export default router;
