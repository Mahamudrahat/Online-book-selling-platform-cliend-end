export async function getAllBook() {
    const response=await fetch("https://online-edu-care.vercel.app/books");
    const result=await response.json();
    console.log(result);
    return result; 
    
}