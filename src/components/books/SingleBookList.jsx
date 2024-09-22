import React from 'react'

export default function SingleBookList(props) {
    const {book}=props
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={book.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title">{book.tags.map(tag=>`.${tag}`).join(' ')}</p>
    <p>{book.bookName}</p>
    <p className="font-sans font-bold">Author: <span className="font-[30]">{book.author}</span></p>
    <p className="font-sans font-bold">Category:<span className="font-[30]">{book.category}</span></p>
    <p className="font-sans font-bold">Rating:<span className="font-[30]">{book.rating}</span></p>

    <div className="card-actions">
      <button className="btn btn-primary bg-orange-900 text-white p-2 rounded-md">Book Details</button>
    </div>
  </div>
</div>
  )
}
