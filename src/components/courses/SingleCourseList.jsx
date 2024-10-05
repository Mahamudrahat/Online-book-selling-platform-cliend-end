import React from 'react'
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { ImAddressBook } from "react-icons/im";
import { IoPricetag,IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";

export default function SingleCourseList(props) {
    const {course}=props
  return (
    
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={course.img_url}
        alt=""
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <p className="card-title">{course.title}</p>
      <p title={course.details}> {course.details.slice(0, 100)}...</p>
      <div className="flex gap-2"><ImAddressBook size="25" color="teal"/> <span className="font-semibold text-gray-800">{course.lession}</span></div>
      <div className="flex gap-2"><IoPricetag size="25" color="teal"/><span className="font-semibold text-gray-800">{course.price}</span></div>
      <div className="flex gap-2"><FaStar size="25" color="gold"/><span className="font-semibold text-gray-800">{course.ratings}</span></div>
      <div className="flex gap-2"><IoTimeOutline size="25" color="teal"/><span className="font-semibold text-gray-800">{course.duration}</span></div>
      <div className="flex gap-2"><GiLevelEndFlag size="25" color="teal"/><span className="font-semibold text-gray-800">{course.level}</span></div>
      <div className="card-actions">
        <Link to={ROUTES.SINGLE_COURSES.DYNAMIC(course._id)}><button className="btn btn-primary bg-orange-900 text-white p-2 rounded-md">Course Details</button></Link>
      </div>
    </div>
  </div>

  )
}
