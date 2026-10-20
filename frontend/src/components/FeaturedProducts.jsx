
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const products = [
    {
      name: "Chocolate Cake",
      description: "Rich and delicious chocolate cake.",
      price: "$15",
    },
    {
      name: "Strawberry Cupcake",
      description: "Soft cupcake with fresh strawberry cream.",
      price: "$6",
    },
    {
      name: "Chocolate Cookies",
      description: "Fresh cookies with delicious chocolate chips.",
      price: "$8",
    },
    {
      name: "Candy Mix",
      description: "A colorful mix of sweet candies.",
      price: "$10",
    },
  ];

  return (
    <section className="bg-[#fff7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">
              Our Favorites
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="text-pink-500">Products</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Discover some of our most popular sweet treats, made to bring
              sweetness to every moment.
            </p>
          </div>

          {/* View All Products Link */}
          <Link
            to="/products"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-bold text-pink-600 transition duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
          >
            View All Products
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
