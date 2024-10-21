import React, { useEffect, useState } from 'react'
import { getAllCategory } from '../../utils/Category';
import SingleCategoryList from './SingleCategoryList';

export default function CategoryList() {
    const [books, setBooks] = useState([]);
    const getAllCategoryList=async ()=>{
        const data=await getAllCategory();
        if(data.length>0){
            setBooks(data);       
        }
        else{setBooks
            setBooks([]);
        }
        
    }
    useEffect(()=>{
      getAllCategoryList();
    },[])
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">{books.map((category)=>(
            
                <SingleCategoryList key={category.id} category={category}/>
            ))
        }
      </div>
    </section>
  )
}
