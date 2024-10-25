import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Product = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://online-book-selling-platform-serverend-2.onrender.com/categories") // Replace with your API endpoint
        const data = await response.json();
        setCategories(data); // Assuming the API returns an array of categories
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
      const imageUploadResponse = await fetch(
        `https://api.imgbb.com/1/upload?expiration=600&key=${API_KEY}`,
        {
          method: "POST",
          body: formData, // Send the FormData containing the image
        }
      );

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
      console.log(imageUrlFromServer);

      // Step 2: Post category data along with the image URL
      const categoryData = {
        id: data.id, 
        name: data.name,
        image: imageUrlFromServer, 
        price:data.price,
        rating:data.rating,
        category:data.category
      };

      const categoryResponse = await fetch("http://localhost:5000/products", {
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
      toast.success("Product Inserted Successfully", {
        position: "top-right",
      });
      reset(); // Reset the form after successful submission
      setImagePreview(null); // Clear image preview
    } catch (error) {
      console.error("Error uploading image or submitting form:", error);
      toast.error("Category Fail to Inserted", {
        position: "top-right",
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
      <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter category name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">Product name is required</p>
          )}
        </div>


        <div>
          <label htmlFor="price" className="block font-medium mb-1">
            Product Price
          </label>
          <input
            type="number" // Use number type for price
            {...register("price", { required: true, min: 0 })} // Register the input field with validation rules
            placeholder="Enter product price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">
              Price is required and must be a positive number
            </p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="block font-medium mb-1">Select Category</label>
          {loading ? (
            <p>Loading categories...</p>
          ) : (
            <select
              {...register("category", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select a Category --</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">Category is required</p>
          )}
        </div>

        <div>
          <label htmlFor="rating" className="block font-medium mb-1">
            Product Rating
          </label>
          <input
            type="number"
            step="0.1" // Allows fractional steps (like 0.1, 0.5, etc.)
            {...register("rating", {
              required: true,
              min: 0,
              max: 5,
              validate: (value) => value <= 5 && value >= 0, // Ensure the rating is between 0 and 5
            })}
            placeholder="Enter product rating (e.g., 4.5)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">
              Rating must be between 0 and 5
            </p>
          )}
        </div>

        <div>
          <label htmlFor="image" className="block font-medium mb-1">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
            onChange={handleImagePreview}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">
              Product image is required
            </p>
          )}
        </div>

        {imagePreview && (
          <div className="text-center">
            <h4 className="text-md font-semibold mb-2">Image Preview:</h4>
            <img
              src={imagePreview}
              alt="Image Preview"
              className="w-48 h-auto mx-auto rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Product;
