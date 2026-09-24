function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold">
              🍰 Sweet House
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Making every moment a little sweeter with delicious cakes,
              cookies, candies, and chocolates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/"
                className="w-fit text-sm text-gray-400 transition hover:text-pink-400"
              >
                Home
              </a>

              <a
                href="/products"
                className="w-fit text-sm text-gray-400 transition hover:text-pink-400"
              >
                Products
              </a>

              <a
                href="/about"
                className="w-fit text-sm text-gray-400 transition hover:text-pink-400"
              >
                About
              </a>

              <a
                href="/contact"
                className="w-fit text-sm text-gray-400 transition hover:text-pink-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>📧 info@sweethouse.com</p>
              <p>📞 +93 700 000 000</p>
              <p>📍 Herat, Afghanistan</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Sweet House. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;