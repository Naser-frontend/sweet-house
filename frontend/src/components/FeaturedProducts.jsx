import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products, { featuredProductIds } from "../data/products";

function FeaturedProducts() {
  const featuredProducts = products.filter((product) =>
    featuredProductIds.includes(product.id)
  );

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Our most loved treats
            </p>
          </div>
          <Link to="/products" className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-pink-500 transition hover:text-pink-600">
            View All
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
