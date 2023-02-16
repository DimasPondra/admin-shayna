import AuthMiddleware from "../../middleware/auth";

export default [
    {
        path: "/product-categories",
        name: "product-category",
        component: () => import("../../views/product-categories/ProductCategory.vue"),
        meta: {
            title: "Product Categories",
            name_page: "product-categories",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/product-categories/create",
        name: "create-product-category",
        component: () => import("../../views/product-categories/CreateProductCategory.vue"),
        meta: {
            title: "Create Product Category",
            name_page: "product-categories",
            middleware: [AuthMiddleware],
        },
    },
    {
        path: "/product-categories/:id/edit",
        name: "edit-product-category",
        component: () => import("../../views/product-categories/EditProductCategory.vue"),
        meta: {
            title: "Edit Product Category",
            name_page: "product-categories",
            middleware: [AuthMiddleware],
        },
    },
];
