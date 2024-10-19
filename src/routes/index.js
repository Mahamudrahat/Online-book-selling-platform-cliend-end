export const ROUTES={
    Home:"/",
    Book:"/books",
    FAQ:"/faq",
    LOGIN:"/login",
    REGISTER:"/register",
    COURSE:"/course",
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
    DASHBOARD:"/dashboard",
    Category:"categories",
}