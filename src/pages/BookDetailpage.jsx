import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function BookDetailpage() {
    let { bookId } = useParams();  // Get bookId from the URL parameters
    const [book, setBook] = useState(null); 
    const [showToast, setShowToast] = useState(false);
    
    const getSingleBookById = async () => {
        const data = await fetch("/Book.json");  // Fetch the Book.json file
        const result = await data.json();        // Parse the JSON response
        const foundBook = result.find(b => b.bookId === parseInt(bookId));  // Find the book that matches the bookId

        if (foundBook) {
            setBook(foundBook);  // Set the found book to state
        }
    };

    const handleToast = () => {
        setShowToast(true);
        
        // Hide the toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 6000);  // 3 seconds
      };

    useEffect(() => {
        getSingleBookById();
    }, []);  // Re-fetch if `bookId` changes

    // If `book` is null (i.e., still loading), show a loading message
    if (!book) {
        return <div>Loading...</div>;
    }

    return (
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-3  border-4 border-gray-300 h-300">
        <img
            src={book.image}
            alt={book.bookName}
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
          
          <div className="flex flex-col w-full p-3 border-4 border-gray-300 h-300">
            <h1 className="font-sans text-3xl font-bold">{book.bookName}</h1>
            <p className="font-sans text-base font-bold">
              Author:{" "}
              <span className="text-base font-normal">{book.author}</span>
            </p>
            <p className="font-sans text-base font-bold">
              Category:{" "}
              <span className="text-base font-normal">{book.category}</span>
            </p>
            <p className="font-sans text-base font-bold">
              Review:{" "}
              <span className="text-base font-normal">{book.review}</span>
            </p>
            <p className="font-sans text-base font-bold">
              Tags:{" "}
              <span className="text-base font-normal">
                {book.tags.map((tag) => `${tag}`).join(",")}
              </span>
            </p>
            <p className="font-sans text-base font-bold">
              TotalPages:{" "}
              <span className="text-base font-normal">{book.totalPages}</span>
            </p>
            <p className="font-sans text-base font-bold">
              Publisher:{" "}
              <span className="text-base font-normal">{book.publisher}</span>
            </p>
            <p className="font-sans text-base font-bold">
              YearOfPublishing:{" "}
              <span className="text-base font-normal">
                {book.yearOfPublishing}
              </span>
            </p>
            <p className="font-sans text-base font-bold">
              Rating:
              <span className="text-base font-normal">{book.rating}</span>
            </p>
            <div className="flex items-center justify-normal">
            <button type="button" className="bg-orange-900 text-white p-2 rounded-md m-4" onClick={handleToast}>Wish to Read</button>
            <button type="button" className="bg-orange-900 text-white p-2 rounded-md m-4" onClick={handleToast}>Add to Cart</button>
            </div>
          </div>
        </div>
        {showToast && (
       <div className="fixed top-4 right-4 z-50 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl p-4">
       <div className="bg-green-500 text-black text-sm font-bold px-4 py-3 rounded-lg shadow-lg">
         <span>
           BookId: {book.bookId}, BookName: "{book.bookName}" has been successfully added to the Cart/Wishlist.
         </span>
       </div>
     </div>
      )}
      </div>
      
    );
}
