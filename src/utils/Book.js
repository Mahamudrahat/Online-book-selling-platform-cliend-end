export async function getAllBook() {
    const response=await fetch("Book.json");
    const result=await response.json();
    console.log(result);
    return result; 
    
}