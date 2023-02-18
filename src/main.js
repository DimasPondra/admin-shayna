import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faHouse,
    faTableList,
    faNoteSticky,
    faFileLines,
    faArrowRightFromBracket,
    faMagnifyingGlass,
    faBell,
    faBars,
    faUserCheck,
    faClose,
} from "@fortawesome/free-solid-svg-icons";

import "./assets/css/main.css";

import "./axios";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import Pagination from "v-pagination-3";

import { createPinia } from "pinia";

library.add(
    faHouse,
    faTableList,
    faNoteSticky,
    faFileLines,
    faArrowRightFromBracket,
    faMagnifyingGlass,
    faBell,
    faBars,
    faUserCheck,
    faClose
);

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(bootstrap);
app.use(Toast);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("pagination", Pagination);

app.mount("#app");
