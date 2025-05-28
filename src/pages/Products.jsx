import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    // Simulated fetch (replace with API if needed)
    const fetchParts = async () => {
      const response = await fetch("/data/parts.json"); // Load from public/data
      const data = await response.json();
      setParts(data);
    };
    fetchParts();
  }, []);

  return (
    <div className="pl-20 pt-6 pb-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {parts.map((part) => (
        <Link to={`/products/${part.id}`} key={part.id} className="border rounded-xl shadow-lg p-4 cursor-poiner hover:shadow-xl transition-shadow duration-300">
          <img src={part.image} alt={part.name} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{part.name}</h2>
          <p className="text-gray-600 text-sm">{part.description}</p>
          <p className="mt-1 font-semibold">Price: Rs. {part.price}</p>
          <p>Rating: ⭐ {part.ratings}</p>
          <p className="italic text-gray-500">"{part.review}"</p>
        </Link>
      ))}
    </div>
  );
};

export default AllParts;
