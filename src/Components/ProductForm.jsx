// src/Components/ProductForm.jsx
import { useState } from "react";

export default function ProductForm({ setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) return;

    setProducts(prev => [...prev, { name, price, image }]);
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Add Product
      </button>
    </form>
  );
}
