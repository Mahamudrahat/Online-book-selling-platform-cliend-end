export const ROUTES={
    Home:"/",
    Book:"/books",
    FAQ:"/faq",
    LOGIN:"/login",
    REGISTER:"/register",
    SINGLE_BOOKS:{
         STATIC: "/books/:bookId",
         DYNAMIC: (bookId) => `/books/${bookId}`,

     },
}