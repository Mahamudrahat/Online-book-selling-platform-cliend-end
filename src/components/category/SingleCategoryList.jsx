import React from 'react'
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { ImAddressBook } from "react-icons/im";
import { IoPricetag,IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";

export default function SingleCategoryList(props) {
    const {category}=props
  return (
    
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={category.image}
        alt=""
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <div class="p-4 text-center">
      <h3 class="text-2xl text-center font-bold bg-gradient-to-r from-pink-500 via-red-500 to-red-900 bg-clip-text text-transparent">{category.name}</h3>
      </div>
      <div className="card-actions">
        <Link to=""><button className="btn btn-primary bg-orange-900 text-white p-2 rounded-md">View Details</button></Link>
      </div>
     
    </div>
  </div>

  )
}
