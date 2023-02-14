export default [
    {
        path: "/products",
        name: "product",
        component: () => import("../../views/products/Product.vue"),
        meta: {
            title: "Products",
            name_page: "products",
        },
    },
    {
        path: "/products/create",
        name: "create-product",
        component: () => import("../../views/products/CreateProduct.vue"),
        meta: {
            title: "Create Product",
            name_page: "products",
        },
    },
    {
        path: "/products/:id/edit",
        name: "edit-product",
        component: () => import("../../views/products/EditProduct.vue"),
        meta: {
            title: "Edit Product",
            name_page: "products",
        },
    },
];
