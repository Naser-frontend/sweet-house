import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Sweet House"
            className="h-12 w-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          Products
        </Link>

        <Link
          to="/about"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          Contact
        </Link>

        <Link
          to="/cart"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          🛒 Cart
        </Link>

        <Link
          to="/login"
          className="rounded-full bg-pink-500 px-5 py-2 font-medium text-white transition hover:bg-pink-600"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;