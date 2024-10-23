import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImAddressBook } from 'react-icons/im';
import { IoPricetag } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { ROUTES } from '../routes';

export default function ProductListByCategory() {
  let { name } = useParams(); // Get the category name from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/products/category/${name || ''}`); // Fetch products by category

      // Check if the response is not JSON (e.g., it's an HTML error page)
      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned an invalid response");
      }

      const data = await response.json(); // Parse JSON response
      setProducts(data); // Update the products state
    } catch (err) {
      setError(err.message); // Handle errors
    } finally {
      setLoading(false); // Stop loading when done
    }
  };

  // Fetch products when the component mounts or when the category changes
  useEffect(() => {
    fetchProducts();
  }, [name]);

  if (loading) return <div>Loading...</div>; // Show loading message while fetching
  if (error) return <div>Error: {error}</div>; // Show error message if there's an issue

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product._id} className="card card-compact bg-base-100 shadow-xl flex flex-col h-full">
            <figure className="px-10 pt-10">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body flex-grow flex flex-col items-center text-center">
              <div className="p-4 text-center">
                <div className="flex gap-2">
                  <ImAddressBook size="25" color="teal" />
                  <span className="text-2xl font-bold text-gray-800">{product.name}</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="flex gap-2">
                  <IoPricetag size="25" color="teal" />
                  <span className="text-2xl font-bold text-gray-800">Price: {product.price}</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800">{product.category}</h3>
              </div>
              <div className="p-4 text-center">
                <div className="flex gap-2">
                  <FaStar size="25" color="gold" />
                  <span className="font-semibold text-gray-800">Rating: {product.rating}</span>
                </div>
              </div>
              <div className="card-actions mt-auto w-full flex justify-center">
                <Link to={ROUTES.SINGLE_PRODUCT.DYNAMIC(product._id)}>
                  <button className="btn btn-primary bg-orange-900 text-white p-2 rounded-md">
                    View Details
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
    <p className="text-gray-600 mt-2">Try searching another category or check back later.</p>
    <Link to="/">
      <button className="mt-4 bg-orange-900 text-white px-6 py-2 rounded-md text-lg">
        Back to Home
      </button>
    </Link>
  </div>
      )}
    </div>
  );
}
