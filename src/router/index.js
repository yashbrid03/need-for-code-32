import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Principal from "../views/Principal.vue";
import Committee from "../views/Committee.vue";
import Events from "../views/Events.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/events",
      name: "Events",
      component: Events,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/principal",
      name: "Principal",
      component: Principal,
      meta: { requiresAuth: true },
    },
    {
      path: "/committee",
      name: "Committee",
      component: Committee,
      meta: { requiresAuth: true },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
        console.log(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  //   console.log(store.state.type);
  //   console.log(store.state.user);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser() /* && to.href == `/${store.state.type}` */) {
      next();
    } else {
      alert("You must be logged in to view this page");
      console.log(await getCurrentUser());
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
