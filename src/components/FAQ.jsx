import React, { useState } from "react";

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I place an order?",
            answer: "To place an order, browse through our book collection, add your desired items to the cart, and proceed to checkout. You can either create an account or checkout as a guest.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards, debit cards, PayPal, and other secure payment options such as Google Pay and Apple Pay.",
        },
        {
            question: "Can I track my order?",
            answer: "Yes, once your order has been shipped, you'll receive an email with a tracking number. You can also track your order through your account page.",
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for books in their original condition. To initiate a return, please contact our customer service team.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer worldwide shipping. International shipping costs and delivery times may vary based on the destination.",
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach out to our customer support team via the contact form on our website, or by emailing support@bookstore.com.",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b-2 pb-4">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full text-left flex justify-between items-center py-4 text-lg font-semibold text-gray-700 hover:text-blue-500 focus:outline-none"
                        >
                            {faq.question}
                            <span className="text-xl">
                                {openQuestion === index ? "-" : "+"}
                            </span>
                        </button>
                        {openQuestion === index && (
                            <div className="text-gray-600 mt-2">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
