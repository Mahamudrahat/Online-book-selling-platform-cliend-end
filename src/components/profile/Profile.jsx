import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidEdit } from "react-icons/bi";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    phone: "",
    photoUrl: "",
    address: "",
  });

  // Open the edit modal with the user's current details
  const handleEditModelOpen = () => {
    setFormData({
      displayName: user.displayName || "",
      phone: user.phone || "",
      photoUrl: user.photoUrl || "",
      address: user.address || "",
    });
    setIsEditModalOpen(true);
  };

  return (
    
<div className="card bg-base-100 shadow-xl lg:h-[500px] sm:h-[700px] sm:w-[400px] lg:w-[700px] mx-auto p-4"> {/* Responsive width */}
      {/* Conditionally render the button based on isBlock */}
      {!user?.isBlock && (
        <button  className="flex justify-end items-end p-2" onClick={handleEditModelOpen}>
          <BiSolidEdit />
        </button>
      )}
      <figure className="px-4 pt-4">
        <img
          src={user.photoUrl}
          alt="profile pic"
          className="rounded-full w-20 h-20 mx-auto" // Center the image
        />
      </figure>
     
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-gray-800">
          {user?.displayName}
        </h2>
        <span
          className={`font-bold ${user?.isBlock ? "text-red-500" : "text-green-500"}`}
        >
          {user?.isBlock ? "Block" : "Active"}
        </span>
      </div>
      <div className="card-body items-center text-center">
  <div className="flex flex-col justify-start items-start space-y-2 w-full"> {/* Ensures full width */}
    <h1 className="font-sans font-bold text-sm sm:text-sm md:text-xl w-full text-left"> {/* Left align the text */}
      Name: <span className="font-sans font-semibold text-sm sm:text-sm sm:px-0 lg:px-2">{user?.displayName}</span>
    </h1>
    <h1 className="font-sans font-bold text-sm sm:text-sm md:text-xl w-full text-left">
      Role: <span className="font-sans font-semibold text-sm sm:text-sm sm:px-0 lg:px-2">{user?.isAdmin ? "Admin" : "User"}</span>
    </h1>
    <h1 className="font-sans font-bold text-sm sm:text-sm md:text-xl w-full text-left">
      Email: <span className="font-sans font-semibold text-sm sm:text-sm sm:px-0 lg:px-2">{user?.email}</span>
    </h1>
  </div>
</div>

{isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-4 sm:w-3/4 md:w-2/3 lg:w-1/3">
          <h3 className="text-xl mb-4">Edit User</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.displayName}
              onChange={(e) =>
                setFormData({ ...formData, displayName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Photo URL:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.photoUrl}
              onChange={(e) =>
                setFormData({ ...formData, photoUrl: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Address:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick=""
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
              Update
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      
      )}

    </div>
    
  );
}
