// src/Pages/User.jsx
export default function User({ user }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}!</h1>
      <p className="text-gray-700">
        egide product this website its help seller many things
      </p>
    </div>
  );
}
