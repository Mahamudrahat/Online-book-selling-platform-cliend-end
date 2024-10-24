export const ROUTES={
    Home:"/",
    Book:"/books",
    FAQ:"/faq",
    LOGIN:"/login",
    REGISTER:"/register",
    COURSE:"/course",
    ALLPRODUCT:"/allproduct",
    ABOUTUS:"/aboutus",
    CONTACTUS:"/contactus",
   
    
    SINGLE_BOOKS:{
         STATIC: "/books/:bookId",
         DYNAMIC: (bookId) => `/books/${bookId}`,

     },
     SINGLE_COURSES:{
        STATIC: "/course/:id",
        DYNAMIC: (id) => `/course/${id}`,

    },
   
    PRODUCT_BY_CATEGORY:{
         STATIC:"/product/:name",
         DYNAMIC:(name)=>`/product/${name}`
    },
    SINGLE_PRODUCT:{
        STATIC: "/products/:id",
        DYNAMIC: (id) => `/products/${id}`,

    },
    DASHBOARD:"/dashboard",
    Category:"categories",
    PRODUCT:"/dashboard/products",
    SHOWALLCATEGORY:"/dashboard/show-category",
    SHOWALLPRODUCT:"/dashboard/show-product",
    SHOWALLUSERLIST:"/dashboard/userList",
    PAYMENTDETAIL:"/dashboard/paymentDetails",
}