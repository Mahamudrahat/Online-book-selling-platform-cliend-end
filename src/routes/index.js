export const ROUTES={
    Home:"/",
    Book:"/books",
    FAQ:"/faq",
    LOGIN:"/login",
    REGISTER:"/register",
    COURSE:"/course",
    SINGLE_BOOKS:{
         STATIC: "/books/:bookId",
         DYNAMIC: (bookId) => `/books/${bookId}`,

     },
     SINGLE_COURSES:{
        STATIC: "/course/:id",
        DYNAMIC: (id) => `/course/${id}`,

    },
}