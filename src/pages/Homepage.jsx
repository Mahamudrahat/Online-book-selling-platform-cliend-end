import React from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/Banner'
import BookList from '../components/books/BookList'

export default function Homepage() {
  return (
    <div>
     <Banner />
     <BookList />
    </div>
    
  )
}
