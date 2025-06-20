import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    setProduct(null);

    // Fetch and delay for at least 2 seconds
    const fetchData = async () => {
      try {
        const res = await fetch("/data/parts.json");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        const found = data.find((item) => String(item.id) === String(id));
        if (!found) throw new Error("Product not found");
        setProduct(found);
      } catch (err) {
        setError(err);
      }
    };

    const timer = setTimeout(() => {
      fetchData().finally(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return <div className="text-center mt-10">Error: {error.message}</div>;
  }
  if (!product) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className=" rounded-xl shadow-full  border-2 overflow-hidden">
        <div className="md:flex">
          {/* product Image */}
          <div className="md:w-1/2 p-8 flex items-center justify-center ">
            <img className=" h-96 object-contain bg-shadow-md rounded-4xl"
              src={product.image}
              alt={product.name}
            />
          </div>
          {/* Personal Info */}
          <div className="md:w-1/2 p-8">
            <div className="mb-2">
              {/* <span className="text-sm font-semibold text-gray-500">Product Name: </span> */}
              <span className="text-2xl font-bold align-middle">{product.name}</span>
            </div>
            <div className="mb-4">
              <span className="text-sm font-semibold">Description:</span>
              <p className="text-lg mt-1">
                {product.description}
              </p>
            </div>
            <span className="text-3xl font-bold ">
              Rs.{product.price.toFixed(2)}
            </span>
            {/* Add your addToCart logic here if needed */}
            <div className="mt-2 space-x-3">
      <button
        className="cursor-pointer flex-1 bg-amber-400 hover:bg-amber-500 text-gray-700 py-3 px-8 rounded-md font-medium transition-colors"
        onClick={() => {
          addToCart(product);
          navigate("/cart");
        }}
      >
        Add to Cart
      </button>
              <button className="cursor-pointer flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-8 rounded-md font-medium transition-colors">
                Buy Now
              </button>
            </div>
            <p>
              <span className="font-medium mt-2">Product ID:</span> {product.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}