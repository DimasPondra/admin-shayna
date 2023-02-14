export default [
    {
        path: "/product-categories",
        name: "product-category",
        component: () => import("../../views/product-categories/ProductCategory.vue"),
        meta: {
            title: "Product Categories",
            name_page: "product-categories",
        },
    },
    {
        path: "/product-categories/create",
        name: "create-product-category",
        component: () => import("../../views/product-categories/CreateProductCategory.vue"),
        meta: {
            title: "Create Product Categories",
            name_page: "product-categories",
        },
    },
    {
        path: "/product-categories/:id/edit",
        name: "edit-product-category",
        component: () => import("../../views/product-categories/EditProductCategory.vue"),
        meta: {
            title: "Edit Product Categories",
            name_page: "product-categories",
        },
    },
];
