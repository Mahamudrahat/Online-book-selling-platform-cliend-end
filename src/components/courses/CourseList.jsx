import React, { useEffect, useState } from 'react'
import { getAllCourse } from '../../utils/Course';
import SingleCourseList from './SingleCourseList';

export default function CourseList() {

    const [courses, setCourses] = useState([]);
    const getALLCourseList=async ()=>{
        console.log("API CALL")
        const data=await getAllCourse();
        if(data.length>0){
            setCourses(data);       
        }
        else{
            
            setCourses([]);
        }
        
    }
    useEffect(()=>{
        getALLCourseList();
    },[])
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">{courses.map((course)=>(
            
                <SingleCourseList key={course._id} course={course}/>
            ))
        }
      </div>
    </section>
  )
}
