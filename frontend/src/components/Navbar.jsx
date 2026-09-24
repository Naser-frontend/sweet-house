import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      
      {/* Logo */}
      <div>
     <img
        src={logo}
        alt="Sweet House"
        className="h-12 w-auto"
     />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a
          href="/"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          Home
        </a>

        <a
          href="/products"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          Products
        </a>

        <a
          href="/about"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          About
        </a>

        <a
          href="/contact"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          Contact
        </a>

        <a
          href="/cart"
          className="font-medium text-gray-700 transition hover:text-pink-500"
        >
          🛒 Cart
        </a>

        <a
          href="/login"
          className="rounded-full bg-pink-500 px-5 py-2 font-medium text-white transition hover:bg-pink-600"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;