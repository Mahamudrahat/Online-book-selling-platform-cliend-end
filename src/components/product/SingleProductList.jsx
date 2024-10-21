import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar,FaPencilAlt } from "react-icons/fa";
import { IoPricetag,IoTimeOutline } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";

export default function SingleProductList(props) {
    const {product}=props
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
            <Link to="">
              <button className="btn btn-primary bg-orange-900 text-white p-2 rounded-md">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      
  
    )
}
