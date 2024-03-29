import { createRouter, createWebHistory } from "vue-router";

import ProductCategory from "./routes/product-categories";
import Product from "./routes/products";
import Bank from "./routes/banks";
import BankAccount from "./routes/bank-accounts";
import User from "./routes/users";
import Transaction from "./routes/transactions";
import Banner from "./routes/banners";

import VueRouteMiddleware from "vue-route-middleware";
import AuthMiddleware from "../middleware/auth";
import GuestMiddleware from "../middleware/guest";

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
            meta: {
                title: "Dashboard",
                name_page: "dashboard",
                middleware: [AuthMiddleware],
            },
        },
        {
            path: "/404",
            name: "404",
            component: () => import("../views/404.vue"),
            meta: {
                title: "404",
                name_page: "404",
                middleware: [AuthMiddleware],
            },
        },
        // {
        //     path: "/form",
        //     name: "form",
        //     component: () => import("../views/Form.vue"),
        //     meta: {
        //         title: "Form",
        //         name_page: "form",
        //         middleware: [AuthMiddleware],
        //     },
        // },
        // {
        //     path: "/table",
        //     name: "table",
        //     component: () => import("../views/Table.vue"),
        //     meta: {
        //         title: "Table",
        //         name_page: "table",
        //         middleware: [AuthMiddleware],
        //     },
        // },
        // {
        //     path: "/detail",
        //     name: "detail",
        //     component: () => import("../views/Detail.vue"),
        //     meta: {
        //         title: "Detail",
        //         name_page: "detail",
        //         middleware: [AuthMiddleware],
        //     },
        // },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/Login.vue"),
            meta: {
                title: "Login",
                name_page: "login",
                middleware: [GuestMiddleware],
            },
        },
        ...ProductCategory,
        ...Product,
        ...Bank,
        ...BankAccount,
        ...User,
        ...Transaction,
        ...Banner,
    ],
});

router.beforeEach(VueRouteMiddleware());
export default router;
