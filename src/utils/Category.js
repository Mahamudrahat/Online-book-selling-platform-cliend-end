export async function getAllCategory() {
    //const response=await fetch("https://online-edu-care.vercel.app/books");
    const response=await fetch("https://online-book-selling-platform-serverend-2.onrender.com/categories");
    const result=await response.json();
    console.log(result);
    return result; 
    
}