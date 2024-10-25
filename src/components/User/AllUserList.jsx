import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

// Sample data structure based on the given API response
const AllUserList = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // For holding selected item for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [selectedImage, setSelectedImage] = useState(null); // For handling image file

  // Simulating API call
  useEffect(() => {
    // Simulate API call to get data
    const fetchData = async () => {
      const data=await fetch("https://online-book-selling-platform-serverend-2.onrender.com/users");
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
      
      
        const categoryData = {
       
            displayName: selectedItem.displayName,
            photoUrl:selectedItem.photoUrl,
            address:selectedItem.address,
          
            
          };
     
      
      

      const response = await fetch(`https://online-book-selling-platform-serverend-2.onrender.com/user/${selectedItem._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });

      if (response.ok) {
        
        const updatedData = data.map((item) =>
           
          item._id === selectedItem._id ? { ...item, ...categoryData } : item
        );
      
        setData(updatedData);
        setIsModalOpen(false); // Close modal
        Swal.fire("Success!", "user has been updated.", "success");
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
          const response = await fetch(`https://online-book-selling-platform-serverend-2.onrender.com/user/delete/${item._id}`, {
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

  const handleMakeAdmin = async (item, status) => {
    try {
      // Make PUT request to update the isAdmin status
      const response = await fetch(`https://online-book-selling-platform-serverend-2.onrender.com/user/role/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminstatus: status }), // Send updated admin status
      });
  
      if (response.ok) {
        // Get the updated result from the response
        const result = await response.json();
  
        // Update the local state to reflect the changes in the frontend
        setData((prevData) =>
          prevData.map((dataItem) =>
            dataItem._id === item._id ? { ...dataItem, isAdmin: status } : dataItem
          )
        );
  
        // Show success message using Swal
        Swal.fire(
          "Success!",
          `User has been ${status ? "granted" : "revoked"} admin rights.`,
          "success"
        );
      } else {
        // Show error message if API call fails
        Swal.fire("Error!", "Something went wrong while updating the role.", "error");
      }
    } catch (error) {
      // Handle network or other API errors
      Swal.fire("Error!", "API call failed. Please try again.", "error");
    }
  };
  const handleBlock = async (item, status) => {
    try {
      // Make PUT request to update the isAdmin status
      const response = await fetch(`https://online-book-selling-platform-serverend-2.onrender.com/user/update/BlockStatus/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blockStatus: status }), // Send updated admin status
      });
  
      if (response.ok) {
        // Get the updated result from the response
        const result = await response.json();
  
        // Update the local state to reflect the changes in the frontend
        setData((prevData) =>
          prevData.map((dataItem) =>
            dataItem._id === item._id ? { ...dataItem, isBlock: status } : dataItem
          )
        );
  
        // Show success message using Swal
        Swal.fire(
          "Success!",
          `User has been ${status ? "granted" : "revoked"} admin rights.`,
          "success"
        );
      } else {
        // Show error message if API call fails
        Swal.fire("Error!", "Something went wrong while updating the role.", "error");
      }
    } catch (error) {
      // Handle network or other API errors
      Swal.fire("Error!", "API call failed. Please try again.", "error");
    }
  };
  
  return (
    <>
    <Helmet>
        <title>Online Edu Care BookShop | User List</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Users List</h1>
<div className="overflow-x-auto rounded-lg shadow-lg">
<div className="w-full">
  <table className="min-w-full bg-white border border-gray-300 ">
    <thead>
      <tr>
        <th className="py-2 px-2 border-b">ProfilePic</th>
        <th className="py-2 px-2 border-b">Name</th>
        <th className="py-2 px-2 border-b">Email</th>
        <th className="py-2 px-2 border-b">Phone</th>
        <th className="py-2 px-2 border-b">Address</th>
        <th className="py-2 px-2 border-b">Role</th>
        <th className="py-2 px-2 border-b">Status</th>
        <th className="py-2 px-2 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="py-2 px-2 border-b">
            <img src={item.photoUrl} alt={item.photoUrl} className="w-16 h-16 object-cover" />
          </td>
          <td className="py-2 px-2 border-b">{item.displayName}</td>
          <td className="py-2 px-2 border-b">{item.email}</td>
          <td className="py-2 px-2 border-b">{item.phone}</td>
          <td className="py-2 px-2 border-b">{item.address}</td>
          <td className="py-2 px-2 border-b">{item.isAdmin ? "Admin" : "User"}</td>
          <td className="py-2 px-2 border-b">{item.isBlock ? "Block" : "Active"}</td>
         <td className="py-2 px-2 border-b">
  <div className="flex space-x-2">
    <button
      className="bg-blue-500 text-white py-1 px-3 rounded w-20 h-10"
      onClick={() => handleEdit(item)}
    >
      Edit
    </button>
    <button
      className="bg-red-500 text-white py-1 px-3 rounded w-20 h-10"
      onClick={() => handleDelete(item)}
    >
      Delete
    </button>
    {item.isAdmin ? (
      <button
        className="bg-gray-400 text-white py-1 px-3 rounded w-20 h-10 text-xs"
        onClick={() => handleMakeAdmin(item,false)}
      >
        Make User
      </button>
    ) : (
      <button
        className="bg-green-500 text-white py-1 px-3 rounded w-20 h-10 text-xs"
        onClick={() => handleMakeAdmin(item,true)}
      >
        Make Admin
      </button>
    )}

    {item.isBlock ? (
      <button
        className="bg-teal-500 text-white py-1 px-3 rounded w-20 h-10"
        onClick={() => handleBlock(item,false)}
      >
        UnBlock
      </button>
    ) : (
      <button
        className="bg-red-500 text-white py-1 px-3 rounded w-20 h-10"
        onClick={() => handleBlock(item,true)} // Updated function for block/unblock
      >
        Block
      </button>
    )}
  </div>
</td>

        </tr>
      ))}
    </tbody>
  </table>
  </div>
</div>
{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
      <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">
        Edit "{selectedItem.displayName}"'s Profile
      </h2>
      
      <label className="block mb-1 md:mb-2 text-sm md:text-base">Name:</label>
      <input
        type="text"
        value={selectedItem.displayName}
        onChange={(e) =>
          setSelectedItem({ ...selectedItem, displayName: e.target.value })
        }
        className="w-full border border-gray-300 p-2 rounded mb-3"
      />

      <label className="block mb-1 md:mb-2 text-sm md:text-base">Photo URL:</label>
      <input
        type="text"
        value={selectedItem.photoUrl}
        onChange={(e) =>
          setSelectedItem({ ...selectedItem, photoUrl: e.target.value })
        }
        className="w-full border border-gray-300 p-2 rounded mb-3"
      />

      <label className="block mb-1 md:mb-2 text-sm md:text-base">Address:</label>
      <input
        type="text"
        value={selectedItem.address}
        onChange={(e) =>
          setSelectedItem({ ...selectedItem, address: e.target.value })
        }
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <div className="flex flex-col sm:flex-row sm:justify-end gap-2 mt-4">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={handleSaveEdit}
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

    
    </div>
    </>
    
  );
};

export default AllUserList;
