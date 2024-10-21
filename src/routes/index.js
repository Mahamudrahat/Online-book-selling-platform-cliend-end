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

    DASHBOARD:"/dashboard",
    Category:"categories",
    PRODUCT:"/dashboard/products"
}