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
} from "@fortawesome/free-solid-svg-icons";

import "./assets/css/main.css";

library.add(
    faHouse,
    faTableList,
    faNoteSticky,
    faFileLines,
    faArrowRightFromBracket,
    faMagnifyingGlass,
    faBell,
    faBars,
    faUserCheck
);

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
