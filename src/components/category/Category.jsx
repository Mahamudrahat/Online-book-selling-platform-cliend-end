import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Category = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);


  
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

   
      if (data.image[0]) {
        formData.append("image", data.image[0]); // Use the key 'image'
    }

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

      // Check if image upload was successful
      if (!imageUploadResponse.ok) {
        throw new Error("Failed to upload image.");
      }
      
      const imageUploadData = await imageUploadResponse.json();
      const imageUrlFromServer = imageUploadData.data.url;
      

      // Step 2: Post category data along with the image URL
      const categoryData = {
        id: data.id, // You can handle auto-increment on the server side
        name: data.name,
        image: imageUrlFromServer, // Use the uploaded image URL
      };

      const categoryResponse = await fetch("https://online-book-selling-platform-serverend-2.onrender.com/categories", {
        method: "POST",
        headers: {
          
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData), // Send JSON body for the category
      });

      // Check if category submission was successful
      if (!categoryResponse.ok) {
        throw new Error("Failed to create category.");
      }

      // Successful submission feedback
      toast.success("Category Inserted Successfully",{
        position:"top-right"
    });
      reset(); // Reset the form after successful submission
      setImagePreview(null); // Clear image preview

    } catch (error) {
      console.error("Error uploading image or submitting form:", error);
      toast.error("Category Fail to Inserted",{
        position:"top-right"
    });
    }
  };

  // Preview the image before upload
  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Category</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Category Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter category name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">Category name is required</p>}
        </div>

        <div>
          <label htmlFor="image" className="block font-medium mb-1">Category Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
            onChange={handleImagePreview}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">Category image is required</p>}
        </div>

        {imagePreview && (
          <div className="text-center">
            <h4 className="text-md font-semibold mb-2">Image Preview:</h4>
            <img src={imagePreview} alt="Image Preview" className="w-48 h-auto mx-auto rounded-md" />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default Category;
