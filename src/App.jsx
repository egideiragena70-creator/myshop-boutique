import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Buy from "./Pages/Buy";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import User from "./Pages/User";

// Components
import Navbar from "./Components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null); // null = not logged in

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar user={user} setUser={setUser} />

        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/admin" element={<Admin setProducts={setProducts} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/user"
            element={user ? <User user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
