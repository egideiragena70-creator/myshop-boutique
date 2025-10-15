// src/Pages/Admin.jsx
import ProductForm from "../Components/ProductForm";

export default function Admin({ setProducts }) {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
      <ProductForm setProducts={setProducts} />
    </div>
  );
}
