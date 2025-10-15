// src/Pages/Home.jsx
export default function Home({ products }) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">No products yet. Add some from Admin panel.</p>
      ) : (
        products.map((p, i) => (
          <div key={i} className="border rounded p-4 shadow hover:shadow-lg transition">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h2 className="font-bold text-lg">{p.name}</h2>
            <p className="text-green-600 font-semibold">${p.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
