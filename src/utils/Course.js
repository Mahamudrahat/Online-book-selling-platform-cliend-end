export async function getAllCourse() {
    const response=await fetch("http://localhost:5000/courses");
    const result=await response.json();
    console.log("Data Calling",result);
    return result; 
    
}