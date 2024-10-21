export async function getAllCategory() {
    //const response=await fetch("https://online-edu-care.vercel.app/books");
    const response=await fetch("http://localhost:5000/categories");
    const result=await response.json();
    console.log(result);
    return result; 
    
}