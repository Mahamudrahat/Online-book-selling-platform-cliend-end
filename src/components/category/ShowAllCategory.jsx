import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Sample data structure based on the given API response
const ShowAllCategory = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // For holding selected item for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [selectedImage, setSelectedImage] = useState(null); // For handling image file

  // Simulating API call
  useEffect(() => {
    // Simulate API call to get data
    const fetchData = async () => {
      const data=await fetch("http://localhost:5000/categories");
      const result=await data.json();
      console.log(result); 
      if(result.length>0){
        setData(result); 
             
    }
    else{
        setData([]);
    }
    };

    fetchData();
  }, []);

  const handleEdit = (item) => {
    setSelectedItem(item); // Set the selected item for editing
    setSelectedImage(null); // Reset selected image
    setIsModalOpen(true); // Open modal
  };

   // Handle image file selection
   const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSaveEdit = async () => {
   try {
      let imageUrlFromServer = selectedItem.image;
      

      // If an image is selected, upload it to IMGBB
      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage); // Append the selected image file
     

        // Access the API key from environment variables
        const API_KEY = import.meta.env.VITE_IBB_API_KEY;
        console.log(API_KEY);

        // Step 1: Upload image to IMGBB
        const imageUploadResponse = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${API_KEY}`, {
          method: "POST",
          body: formData, // Send the FormData containing the image
        });

        // Check if the image upload was successful
        if (!imageUploadResponse.ok) {
          throw new Error("Failed to upload image.");
        }

        const imageUploadData = await imageUploadResponse.json();
        imageUrlFromServer = imageUploadData.data.url; // Get the uploaded image URL
        console.log(imageUrlFromServer);
      }

      // Step 2: Post category data along with the image URL
      
        const categoryData = {
       
            name: selectedItem.name,
            image: imageUrlFromServer, // Use the new uploaded image URL (if uploaded)
          };
     
      
      

      const response = await fetch(`http://localhost:5000/categories/update/${selectedItem._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });

      if (response.ok) {
        const updatedData = data.map((item) =>
          item.id === selectedItem.id ? { ...item, ...categoryData } : item
        );
        setData(updatedData);
        setIsModalOpen(false); // Close modal
        Swal.fire("Success!", "Category has been updated.", "success");
      } else {
        Swal.fire("Error!", "Something went wrong while updating.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "API call failed. Please try again.", "error");
    }
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Step 1: Make DELETE request to the server
          const response = await fetch(`http://localhost:5000/categories/delete/${item._id}`, {
            method: "DELETE",
          });
  
          // Step 2: If the delete was successful
          if (response.ok) {
            // Step 3: Update the state by removing the deleted item from the `data` array
            const updatedData = data.filter((newItem) => newItem._id !== item._id);
  
            // Step 4: Set the new data in the state
            setData([...updatedData]);
  
            // Step 5: Show success message
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          } else {
            // Handle case when delete failed (e.g., server error)
            Swal.fire("Error!", "Something went wrong while deleting.", "error");
          }
        } catch (error) {
          // Handle network or fetch error
          Swal.fire("Error!", "API call failed. Please try again.", "error");
        }
      }
    });
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Category Table</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">
                <img src={item.image} alt={item.name} className="w-16 h-16" />
              </td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={selectedItem.name}
              onChange={(e) =>
                setSelectedItem({ ...selectedItem, name: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded mb-4"
            />

            <label className="block mb-2">Current Image:</label>
            <img src={selectedItem.image} alt="Selected" className="w-16 h-16 mb-4" />

            <label className="block mb-2">Change Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 p-2 rounded mb-4"
            />

            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default ShowAllCategory;
