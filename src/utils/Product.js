export async function getAllProduct() {
    //const response=await fetch("https://online-edu-care.vercel.app/books");
    const response=await fetch("https://online-book-selling-platform-serverend-2.onrender.com/products");
    const result=await response.json();
    console.log(result);
    return result; 
    
}