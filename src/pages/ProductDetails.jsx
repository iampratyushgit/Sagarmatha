import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    setProduct(null);
    fetch("/data/parts.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Find the product by id (id from params is string, so convert to number)
        const found = data.find((item) => String(item.id) === String(id));
        if (!found) throw new Error("Product not found");
        setProduct(found);
      })
      .catch((err) => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="w-12 h-12 border-4 border-indigo-600  rounded-full animate-spin"></div>
    </div>
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
              alt={product.title}
            />
          </div>
          {/* Personal Info */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold t mt-2">
              {product.title}
            </h1>
            <span className="text-3xl font-bold ">
              ${product.price.toFixed(2)}
            </span>
            {/* Add your addToCart logic here if needed */}
            <div className="mt-2 space-x-3">
              <button className="cursor-pointer flex-1 bg-indigo-600 hover:bg-indigo-700  py-3 px-8 rounded-md font-medium transition-colors">
                Add to Cart
              </button>
              <button className="cursor-pointer flex-1 bg-gray-200 hover:bg-gray-300  py-3 px-8 rounded-md font-medium transition-colors">
                Buy Now
              </button>
            </div>
            <p className="text-gray-600">
              <span className="font-medium mt-2">Product ID:</span> {product.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}