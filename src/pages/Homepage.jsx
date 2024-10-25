import React from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/Banner'
import BookList from '../components/books/BookList'
import CategoryList from '../components/category/CategoryList'
import FAQ from '../components/FAQ'
import ProductHighlights from '../components/ProductHighLight'
import { Helmet } from 'react-helmet'

export default function Homepage() {
  return (
    <>
    <Helmet>
        <title>Online Edu Care BookShop | Home</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div>
     <Banner />
     <CategoryList />
     <ProductHighlights/>
     <FAQ/>
    </div>
    </>
   
    
  )
}
