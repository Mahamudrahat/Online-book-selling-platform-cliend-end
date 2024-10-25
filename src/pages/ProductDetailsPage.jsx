import React from 'react'
import ProductList from '../components/product/ProductList'
import { Helmet } from 'react-helmet'

export default function ProductDetailsPage() {
  return (

    <>
    <Helmet>
        <title>Online Edu Care BookShop | Product </title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div>
        <ProductList/>
    </div>
    </>
    
  )
}
