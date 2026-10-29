import { Link } from "react-router-dom";
import {
  CakeSlice,
  House,
  ShoppingBag,
  Info,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/", icon: House },
    { name: "Products", path: "/products", icon: ShoppingBag },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <footer className="bg-[#25191d] px-5 pt-14 text-white sm:px-8 sm:pt-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:pb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="Sweet House Home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-105">
                <CakeSlice size={27} strokeWidth={1.8} />
              </span>

              <span className="text-2xl font-extrabold tracking-tight">
                Sweet <span className="text-pink-400">House</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Making every moment a little sweeter with delicious cakes,
              cookies, candies, and chocolates made with love.
            </p>

           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-pink-400"
                  >
                    <Icon size={16} />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-gray-400">
              <a
                href="mailto:info@sweethouse.com"
                className="group flex items-start gap-3 transition hover:text-pink-400"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-pink-400"
                />
                <span>info@sweethouse.com</span>
              </a>

              <a
                href="tel:+93700000000"
                className="group flex items-start gap-3 transition hover:text-pink-400"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-pink-400"
                />
                <span>+93 700 000 000</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-pink-400"
                />
                <span>Herat, Afghanistan</span>
              </div>
            </div>
          </div>

          {/* Shopping Message */}
          <div>
            <h3 className="text-lg font-bold">
              Sweet Moments
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Find your favorite treats and make your special moments even
              sweeter.
            </p>

            <Link
              to="/products"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20"
            >
              Shop Now
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Sweet House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
