import React, { useContext, useState } from "react";

import toast from 'react-hot-toast';
import { AuthContext } from "../Provider/AuthProvider";
const BuyNow = ({ show, handleClose, product }) => {
  // Simulated logged-in user details
  const {user}=useContext(AuthContext);

  // Form state to hold user details, product details, quantity, and payment amount
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    phone: user.phone,
    address: user.address,
    paymentDetails: "",
    paymentAmount: product.price,  // assuming product has a price
    quantity: 1,  // default quantity
    userId:user.uid,
   
  });
 console.log(formData);
  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Simulate form submission using fetch API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://online-book-selling-platform-serverend-2.onrender.com/puchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productId: product.id, // passing product info
          productName:product.name,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // On success
      toast.success("Payment is Successfull",{
         position: "top-right"
      });

      // Close the modal
      handleClose();
    } catch (error) {
      toast.error("Purchase failed. Please try again.");
    }
  };

  if (!show) return null; // Don't render modal if `show` is false

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <div className="flex justify-between items-center p-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg">
            <h2 className="text-xl font-semibold">Purchase "{product.name}"</h2>
            
            <button onClick={handleClose} className="text-white hover:text-gray-600 text-2xl transition-colors duration-200 ease-in-out">&times;</button>
          </div>
          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name (Read-Only) */}
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  readOnly
                  className="w-full border p-2 rounded-md bg-gray-200"
                />
              </div>

              {/* Email (Read-Only) */}
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="w-full border p-2 rounded-md bg-gray-200"
                />
              </div>

              {/* Phone (Read-Only) */}
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  readOnly
                  className="w-full border p-2 rounded-md bg-gray-200"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                  required
                />
              </div>

              {/* Payment Details */}
              <div>
                <label className="block text-gray-700">Payment Details</label>
                <input
                  type="text"
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                  required
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-gray-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                  min="1"
                  required
                />
              </div>

              {/* Payment Amount (Auto-calculated based on quantity) */}
              <div>
                <label className="block text-gray-700">Total Payment Amount</label>
                <input
                  type="number"
                  name="paymentAmount"
                  value={formData.quantity * product.price}
                  readOnly
                  className="w-full border p-2 rounded-md bg-gray-200"
                />
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-orange-900 text-white py-2 px-4 rounded-md"
                >
                  Confirm Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
