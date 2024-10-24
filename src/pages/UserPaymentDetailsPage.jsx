import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
// Import necessary icons (assuming you have these)
import { ImAddressBook } from 'react-icons/im'; // Make sure you import these
import { IoPricetag } from 'react-icons/io5'; // Same as above
import { MdProductionQuantityLimits } from "react-icons/md";

export default function UserPaymentDetailsPage() {
    const { user } = useContext(AuthContext);
    const [paymentDetail, setPayment] = useState([]);

    const getPayment = async () => {
        console.log("Fetching payment details...");
        if (!user || !user.uid) {
            console.error("User not found");
            return; // Exit if user is not available
        }

        try {
            const response = await fetch(`http://localhost:5000/purchase/${user.uid}`); // Fixed endpoint
            const result = await response.json();
            console.log("Payment Details:", result);

            if (result && Array.isArray(result)) {
                setPayment(result); // Set the payment details state
            } else {
                console.error("Unexpected result format", result);
            }
        } catch (error) {
            console.error("Error fetching payment details:", error);
        }
    };

    useEffect(() => {
        getPayment(); // Call getPayment on component mount
    }, [user]); // Dependency on user to ensure it runs again if user changes

    // Calculate the total price only if paymentDetail is not empty
    const totalPrice = paymentDetail.length > 0 
        ? paymentDetail.reduce((acc, payment) => acc + Number(payment.paymentAmount), 0) // Sum all prices directly
        : 0;  

    return (
        <>
            <div><h1 className="text-lg font-sans font-bold">Total Purchase Amount: {totalPrice}</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paymentDetail.length > 0 ? (
                    paymentDetail.map(payment => (
                        <div key={payment._id} className="card card-compact bg-base-100 shadow-xl flex flex-col h-full">
                            <div className="card-body flex-grow flex flex-col items-center text-center">
                                <div className="p-4 text-center">
                                    <div className="flex gap-2">
                                        <ImAddressBook size="25" color="teal" />
                                        <span className="text-2xl font-bold text-gray-800">{payment.productName ? payment.productName : "Something"}</span>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <div className="flex gap-2">
                                        <IoPricetag size="25" color="teal" />
                                        <span className="text-2xl font-bold text-gray-800">Price: {payment.paymentAmount}</span>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <div className="flex gap-2">
                                    <MdProductionQuantityLimits size="25" color="teal"/> <span className="text-2xl font-bold text-gray-800">{payment.quantity}</span>
                                    </div>
                               
                                </div>
                                <div className="card-actions mt-auto w-full flex justify-center">
                                    <Link to="">
                                        <button className="btn btn-primary bg-orange-900 text-white p-2 rounded-md">
                                            Payment
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md m-4">
                        <img
                            src="https://static.thenounproject.com/png/3850446-200.png" // Use an illustrative icon or image URL
                            alt="No Products Found"
                            className="w-32 h-32"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Oops! No Products Found</h2>
                       
                        <Link to="/dashboard">
                            <button className="mt-4 bg-orange-900 text-white px-6 py-2 rounded-md text-lg">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
