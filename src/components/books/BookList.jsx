import React, { useEffect, useState } from 'react'
import { getAllBook } from '../../utils/Book';
import SingleBookList from './SingleBookList';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const getAllbookList=async ()=>{
        const data=await getAllBook();
        if(data.length>0){
            setBooks(data);       
        }
        else{setBooks
            setBooks([]);
        }
        
    }
    useEffect(()=>{
        getAllbookList();
    },[])
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">{books.map((book)=>(
            
                <SingleBookList key={book._bookId} book={book}/>
            ))
        }
      </div>
    </section>
  )
}
