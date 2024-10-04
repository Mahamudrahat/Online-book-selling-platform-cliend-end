export async function getAllBook() {
    const response=await fetch("http://localhost:5000/books");
    const result=await response.json();
    console.log(result);
    return result; 
    
}