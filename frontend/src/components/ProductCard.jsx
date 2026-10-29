import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCart } from "../context/useCart";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, name, description, price, image } = product;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 shrink-0 overflow-hidden bg-pink-50 sm:h-44 xl:h-40 2xl:h-44">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-pink-500">
            Image unavailable
          </div>
        )}

        <button
          type="button"
          aria-label={`Add ${name} to favorites`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-pink-500 shadow-md transition hover:bg-pink-500 hover:text-white"
        >
          <Heart size={18} strokeWidth={1.8} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-center gap-1 text-xs">
          <span className="tracking-tight text-amber-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="text-gray-400">(5.0)</span>
        </div>

        <Link
          to={`/products/${id}`}
          className="mt-2 line-clamp-1 text-sm font-bold text-gray-900 transition hover:text-pink-500 sm:text-base"
        >
          {name}
        </Link>

        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-gray-500 sm:text-sm">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="shrink-0 text-base font-extrabold text-pink-500 sm:text-lg">
            ${price.toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="rounded-full bg-pink-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-pink-600 sm:px-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
