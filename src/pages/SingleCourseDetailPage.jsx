import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ImAddressBook } from "react-icons/im";
import { IoPricetag,IoTimeOutline } from "react-icons/io5";
import { FaStar,FaPencilAlt } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";
import { MdTitle } from "react-icons/md";
import { FaImagePortrait } from "react-icons/fa6";


export default function SingleCourseDetailPage() {
    let {id}=useParams();
    const [course,setCourse]=useState(null);
    const getSingleCourseDetail=async ()=>{
        console.log("course_id",id);
        const data=await fetch(`http://localhost:5000/courses/${id}`)
        const result=await data.json();
        if (result) {
            setCourse(result);  // Set the found book to state
        }
    };

    useEffect(()=>{
        getSingleCourseDetail();
    },[]);
    if(!course){
        return <div>Loading....</div>
    }
  return (
    <div className="flex justify-center items-center">
    <div className="card card-compact bg-base-100 rounded-lg shadow-lg sm:w-full lg:w-2/3 p-2 mt-2">
    <figure className="px-10 pt-10">
      <img
        src={course.img_url}
        alt=""
        className="rounded-xl w-96 h-64" />
    </figure>
    <div className="card-body items-center text-center">
      <p className="card-title">{course.title}</p>
      <p title={course.details}> {course.details.slice(0, 100)}...</p>
      <div className="flex gap-2"><ImAddressBook size="25" color="teal"/> <span className="font-semibold text-gray-800">{course.lession}</span></div>
      <div className="flex gap-2"><IoPricetag size="25" color="teal"/><span className="font-semibold text-gray-800">{course.price}</span></div>
      <div className="flex gap-2"><FaStar size="25" color="gold"/><span className="font-semibold text-gray-800">{course.ratings}</span></div>
      <div className="flex gap-2"><IoTimeOutline size="25" color="teal"/><span className="font-semibold text-gray-800">{course.duration}</span></div>
      <div className="flex gap-2"><GiLevelEndFlag size="25" color="teal"/><span className="font-semibold text-gray-800">{course.level}</span></div>
      <div className="flex gap-2"><MdTitle size="25" color="teal"/><span className="font-semibold text-gray-800">{course.title}</span></div>
      <div className="flex gap-2"><FaPencilAlt size="25" color="teal"/><span className="font-semibold text-gray-800">{course.author}</span></div>
      <div className="flex justify-center items-center gap-2"><FaImagePortrait size="25" color="teal"/> 
      <img
        src={course.author_img_url}
        alt=""
        className="rounded-lg w-30 h-30" />
    </div>
    </div>
  </div>
  </div>
  )
}
