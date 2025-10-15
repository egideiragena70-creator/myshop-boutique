// src/Components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/admin">Admin</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4">{user.email}</span>
            <button onClick={() => setUser(null)} className="bg-red-500 p-1 rounded hover:bg-red-600">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 p-1 rounded hover:bg-blue-600">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
