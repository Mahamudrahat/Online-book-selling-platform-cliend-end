export const ROUTES={
    Home:"/",
    Book:"/books",
    FAQ:"/faq",
    SINGLE_BOOKS:{
         STATIC: "/books/:bookId",
         DYNAMIC: (bookId) => `/books/${bookId}`,

     },
}