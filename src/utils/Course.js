export async function getAllCourse() {
    const response=await fetch(`https://online-edu-care.vercel.app/courses`);
    const result=await response.json();
    console.log("Data Calling",result);
    return result; 
    
}