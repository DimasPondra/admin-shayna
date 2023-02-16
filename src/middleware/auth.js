export default (to, from, next) => {
    let auth = localStorage.getItem("token");
    if (auth == null) {
        next({ name: "login" });
        return false;
    }
};
