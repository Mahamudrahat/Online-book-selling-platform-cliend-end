import React, { useEffect, useState } from 'react'
import { getAllBook } from '../utils/Book';


export default function BookDetailpage() {
    const [bookDetails, setBookDetails] = useState([]);
    const getAllbookList=async ()=>{
        const data=await getAllBook();
        if(data.length>0){
            setBookDetails(data);       
        }
        else{setBooks
            setBookDetails([]);
        }
        
    }
    useEffect(()=>{
        getAllbookList();
    },[])
  return (
    <section class="container mx-auto">
     <div clas="grid grid-1 lg:grid-2">{bookDetails.map((singleBookDetail)=>{
         return(
            <div><img src={singleBookDetail.image} alt=""/></div>
         )
     })}</div>
    </section>
  )
}
