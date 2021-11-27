import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Reserve from './components/Reserve.vue'

const routes = [
    {
        name: "Reserve",
        component: Reserve,
        path: "/reserve/:id",
    },
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    {
        name: "Add",
        component: Add,
        path: "/add",
    },
    {
        name: "Update",
        component: Update,
        path: "/update/:id",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;