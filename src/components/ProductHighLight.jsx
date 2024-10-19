import React from "react";

const ProductHighlights = () => {
    const products = [
        {
            title: "Bestselling Fiction Novels",
            description:
                "Discover the most popular fiction novels of the year. Immerse yourself in gripping stories and unforgettable characters.",
            imageUrl:
                "https://www.hachettebookgroup.com/wp-content/uploads/2023/06/9781549173653.jpg", 
            altText: "Fiction Book Cover",
            discount: "25% OFF", 
        },
        {
            title: "Exclusive Book Bundles",
            description:
                "Get more for less with our exclusive book bundles. Perfect for readers who can't get enough of their favorite genres.",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuKKa0UTd8uJHO1uXo6ALrHA-CG_Q7NEu1w&s", 
            altText: "Book Bundle Offer",
            discount: "15% OFF", 
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.altText}
                            className="w-full md:w-1/2 h-48 object-cover ml-2"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="bg-yellow-400 text-yellow-900 font-bold text-lg py-2 px-4 rounded-full inline-block">
                                {product.discount} on all orders!
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductHighlights;
