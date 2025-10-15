import React from "react";

const products = [
  { id: 1, name: "T-shirt Yiza", price: "$15", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Jean Slim", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Ikoti rishyushye", price: "$40", image: "https://via.placeholder.com/150" },
];

export default function Products() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center">
          <img className="w-40 h-40 object-cover mb-4" src={product.image} alt={product.name} />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 mb-4">{product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
        </div>
      ))}
    </div>
  );
}
