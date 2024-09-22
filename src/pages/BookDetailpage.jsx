import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetailpage() {
    let { bookId } = useParams();  // Get bookId from the URL parameters
    const [book, setBook] = useState(null);  // Use `null` initially for better handling of the loading state

    const getSingleBookById = async () => {
        const data = await fetch("/Book.json");  // Fetch the Book.json file
        const result = await data.json();        // Parse the JSON response
        const foundBook = result.find(b => b.bookId === parseInt(bookId));  // Find the book that matches the bookId

        if (foundBook) {
            setBook(foundBook);  // Set the found book to state
        }
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
            <div className="grid grid-cols-2 gap-4">
            <img src={book.image} alt={book.bookName} className="rounded-lg shadow-2xl w-full" />
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mt-4">{book.bookName}</h1>
                <p className="text-xl mt-2">Author: {book.author}</p>
                <p className="text-lg mt-1">Category: {book.category}</p>
                <p className="text-lg mt-1">Total Pages: {book.totalPages}</p>
                <p className="text-lg mt-1">Rating: {book.rating}</p>
                <p className="text-lg mt-1">{book.review}</p>
                <div className="mt-4">
                    <p className="text-lg font-semibold">Tags:</p>
                    <p>{book.tags.map(tag => `.${tag}`).join(' ')}</p> {/* Display tags in the required format */}
                </div>
            </div>
            </div>
                
        </div>
    );
}
