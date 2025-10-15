import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyShop
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "text-white hover:text-green-100 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "text-white hover:text-green-100 transition"
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "text-white hover:text-green-100 transition"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/buy"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1 text-white"
                  : "text-white hover:text-green-100 transition"
              }
            >
              Buy
            </NavLink>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/"
                className="text-white hover:text-green-200 transition"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/products"
                className="text-white hover:text-green-200 transition"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/about"
                className="text-white hover:text-green-200 transition"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/buy"
                className="text-white hover:text-green-200 transition"
              >
                Buy
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
