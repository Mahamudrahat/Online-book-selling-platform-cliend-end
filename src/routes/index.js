export const ROUTES={
    Home:"/",
    Book:"/books",
    SINGLE_BOOKS:{
         STATIC: "/books/:bookId",
         DYNAMIC: (bookId) => `/books/${bookId}`,

     },
}