import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { useFavorites } from "../context/FavoritesContext";
import products from "../data/products";

function Favorites() {
  const { favoriteIds } = useFavorites();
  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

  return (
    <main className="min-h-screen bg-[#fff8fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">
            Your Sweet Collection
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
            My <span className="text-pink-500">Favorites</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Keep the treats you love close and find them whenever you want a little sweetness.
          </p>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <section className="rounded-2xl border border-pink-100 bg-white px-5 py-14 text-center shadow-sm sm:px-8 sm:py-16">
            <h2 className="text-2xl font-extrabold text-[#25191d] sm:text-3xl">
              No favorites yet
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              Tap the heart on any sweet you love, and it will appear here.
            </p>
            <Link
              to="/products"
              className="mt-7 inline-flex rounded-full bg-pink-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg"
            >
              Explore Products
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}

export default Favorites;
