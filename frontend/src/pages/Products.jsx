import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Cakes",
    "Cookies",
    "Candy",
    "Chocolate",
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
      name: "Chocolate Cookies",
      description: "Fresh cookies with delicious chocolate chips.",
      price: "$8",
      category: "Cookies",
    },
    {
      name: "Candy Mix",
      description: "A colorful mix of sweet candies.",
      price: "$10",
      category: "Candy",
    },
    {
      name: "Vanilla Cake",
      description: "Soft vanilla cake with creamy frosting.",
      price: "$13",
      category: "Cakes",
    },
    {
      name: "Chocolate Brownie",
      description: "Soft and rich chocolate brownie.",
      price: "$7",
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

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
            Sweet Collection
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Products
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Explore our delicious collection of cakes, cookies, candies,
            and chocolates made with love.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
                selectedCategory === category
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm hover:bg-pink-100 hover:text-pink-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </main>
  );
}

export default Products;