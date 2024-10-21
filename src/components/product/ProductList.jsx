import React, { useEffect, useState } from 'react'

import { getAllProduct } from '../../utils/Product';
import SingleProductList from './SingleProductList';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const getAllProductList=async ()=>{
        const data=await getAllProduct();
        if(data.length>0){
            setProducts(data);       
        }
        else{
            setProducts([]);
        }
        
    }
    useEffect(()=>{
        getAllProductList();
    },[])
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">{products.map((product)=>(
            
                <SingleProductList key={product.id} product={product}/>
            ))
        }
      </div>
    </section>
  )
}
