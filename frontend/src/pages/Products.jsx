import banner from "../assets/products-banner.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Cakes", "Cookies", "Candy", "Chocolate"];

const priceRanges = [
  { label: "Under $10" },
  { label: "$10 - $20" },
  { label: "$20 - $30" },
  { label: "Over $30" },
];

const products = [
  {
    name: "Chocolate Cake",
    description: "Rich and delicious chocolate cake.",
    price: "$15",
    category: "Cakes",
  },
  {
    name: "Strawberry Cupcake",
    description: "Soft cupcake with fresh strawberry cream.",
    price: "$6",
    category: "Cakes",
  },
  {
    name: "Vanilla Cake",
    description: "Soft vanilla cake with creamy frosting.",
    price: "$13",
    category: "Cakes",
  },
  {
    name: "Chocolate Cookies",
    description: "Fresh cookies with delicious chocolate chips.",
    price: "$8",
    category: "Cookies",
  },
  {
    name: "Candy Mix",
    description: "A colorful mix of sweet candies.",
    price: "$6",
    category: "Candy",
  },
  {
    name: "Chocolate Brownie",
    description: "Soft and rich chocolate brownie.",
    price: "$4",
    category: "Chocolate",
  },
  {
    name: "Macaron Box",
    description: "Colorful macarons with delicious flavors.",
    price: "$12",
    category: "Cookies",
  },
  {
    name: "Dark Chocolate",
    description: "Premium dark chocolate for chocolate lovers.",
    price: "$9",
    category: "Chocolate",
  },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  function togglePriceRange(label) {
    setSelectedPriceRanges((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  }

  function matchesPrice(price, range) {
    switch (range) {
      case "Under $10":
        return price < 10;
      case "$10 - $20":
        return price >= 10 && price <= 20;
      case "$20 - $30":
        return price > 20 && price <= 30;
      case "Over $30":
        return price > 30;
      default:
        return true;
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const price = Number(product.price.replace("$", ""));

    const matchesSelectedPrices =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((range) => matchesPrice(price, range));

    return matchesCategory && matchesSelectedPrices;
  });

  function clearFilters() {
    setSelectedCategory("All");
    setSelectedPriceRanges([]);
  }

  return (
    <main className="min-h-screen bg-[#fff8fa] pb-12">
      {/* Decorative Banner */}
      <section className="relative flex min-h-[170px] items-center justify-center overflow-hidden bg-[#ffe8ef] px-5 py-8 sm:min-h-[190px]">
        <img
          src={banner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/85 via-rose-50/70 to-pink-100/85" />

        <div className="relative z-10 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
            Sweet Moments Start Here
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
            Our Products
          </h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm">
            <Link to="/" className="text-gray-600 hover:text-pink-600">
              Home
            </Link>
            <ChevronRight size={14} className="text-pink-500" />
            <span className="font-semibold text-pink-600">Products</span>
          </div>
        </div>
      </section>

      {/* Filters and Product Grid */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-5 px-4 pt-7 sm:px-6 lg:grid-cols-[210px_minmax(0,1fr)] lg:px-8">
        <aside className="rounded-xl border border-pink-100 bg-white p-4 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-pink-500" />
            <h2 className="font-bold text-gray-900">Filters</h2>
          </div>

          <h3 className="mb-3 text-sm font-bold text-gray-800">
            Categories
          </h3>

          <div className="flex flex-wrap gap-1 lg:flex-col">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-3 py-2 text-left text-sm transition ${
                  selectedCategory === category
                    ? "bg-pink-100 font-semibold text-pink-600"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-5 border-t border-gray-100 pt-4">
            <h3 className="mb-3 text-sm font-bold text-gray-800">
              Price Range
            </h3>

            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label
                  key={range.label}
                  className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedPriceRanges.includes(range.label)}
                    onChange={() => togglePriceRange(range.label)}
                    className="h-4 w-4 accent-pink-500"
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 text-sm font-semibold text-pink-500 hover:text-pink-700"
          >
            Clear Filters
          </button>
        </aside>

        {/* Products */}
        <section className="min-w-0">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-[#25191d] sm:text-2xl">
                Our Sweet Collection
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Find your favorite treats.
              </p>
            </div>

            <span className="rounded-full bg-white px-3 py-2 text-xs text-gray-600 shadow-sm sm:text-sm">
              {filteredProducts.length} products
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-pink-100 bg-white px-5 py-12 text-center">
              <span className="text-4xl">🍰</span>
              <h3 className="mt-3 font-bold text-gray-800">
                No products found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another category or price range.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white hover:bg-pink-600"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Products;
