import { useState } from "react";

export default function Buy() {
  const [cart, setCart] = useState([]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">No products in cart.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="border p-2 rounded">{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
