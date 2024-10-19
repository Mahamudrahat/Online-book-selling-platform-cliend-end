import React from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/Banner'
import BookList from '../components/books/BookList'
import CategoryList from '../components/category/CategoryList'
import FAQ from '../components/FAQ'
import ProductHighlights from '../components/ProductHighLight'

export default function Homepage() {
  return (
    <div>
     <Banner />
     <CategoryList />
     <ProductHighlights/>
     <FAQ/>
    </div>
    
  )
}
