import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar,FaPencilAlt } from "react-icons/fa";
import { IoPricetag,IoTimeOutline } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";
import { ROUTES } from '../routes';
import BuyNow from '../components/BuyNow';

export default function SingleProductDetailPage() {
    let {id}=useParams();
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    // Handle modal open/close
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [product,setProduct]=useState(null);
    const getProductDetail=async ()=>{
        console.log("product_id",id);
        const data=await fetch(`http://localhost:5000/products/${id}`)
        const result=await data.json();
        if (result) {
            setProduct(result);  // Set the found book to state
        }
    };

    useEffect(()=>{
        getProductDetail();
    },[]);
    if(!product){
        return <div>Loading....</div>
    }
  return (
    <div className="card card-compact bg-base-100 shadow-xl flex flex-col h-full">
        <figure className="px-10 pt-10">
          <img
            src={product.image}
            alt=""
            className="rounded-xl w-20 h-20"
          />
        </figure>
        <div className="card-body flex-grow flex flex-col items-center text-center">
          <div className="p-4 text-center">
            <div className="flex gap-2">
              <ImAddressBook size="25" color="teal" />
              <span className="text-2xl font-bold text-gray-800">{product.name}</span>
            </div>
          </div>
          <div className="p-4 text-center">
            <div className="flex gap-2">
              <IoPricetag size="25" color="teal" />
              <span className="text-2xl font-bold text-gray-800">Price: {product.price}</span>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800">{product.category}</h3>
          </div>
          <div className="p-4 text-center">
            <div className="flex gap-2">
              <FaStar size="25" color="gold" />
              <span className="font-semibold text-gray-800">Rating: {product.rating}</span>
            </div>
          </div>
          <div className="card-actions mt-auto w-full flex justify-center"> {/* Adjust here for alignment */}
        
              <button className="btn btn-primary bg-orange-900 text-white p-2 rounded-md"   onClick={handleShow}>
                Buy Now
              </button>
              <BuyNow show={showModal} handleClose={handleClose} product={product} />
          </div>
        </div>
      </div>
      
  )
}
