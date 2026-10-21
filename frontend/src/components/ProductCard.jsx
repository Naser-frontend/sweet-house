
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";

const productImages = {
  "Chocolate Cake":
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  "Strawberry Cupcake":
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=600&q=80",
  "Chocolate Cookies":
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
  "Candy Mix":
    "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=600&q=80",
  "Vanilla Cake":
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
  "Chocolate Brownie":
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  "Macaron Box":
    "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80",
  "Dark Chocolate":
    "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
};

function ProductCard({ name, description, price }) {
  const { addToCart } = useCart();
  const [imageFailed, setImageFailed] = useState(false);

  const safeName =
    typeof name === "string" && name.trim() ? name : "Sweet Treat";

  const safeDescription =
    typeof description === "string"
      ? description
      : "A delicious sweet treat made with love.";

  const safePrice =
    typeof price === "string" || typeof price === "number"
      ? price
      : "$0";

  const productId = safeName.toLowerCase().replaceAll(" ", "-");
  const image = productImages[safeName];

  const product = {
    id: productId,
    name: safeName,
    description: safeDescription,
    price: Number(String(safePrice).replace("$", "")),
    quantity: 1,
  };

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative h-40 shrink-0 overflow-hidden bg-pink-50 sm:h-44 xl:h-40 2xl:h-44">
        {image && !imageFailed ? (
          <img
            src={image}
            alt={safeName}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-pink-500">
            <span className="text-3xl">🍰</span>
            <span className="px-2 text-center text-xs">
              {imageFailed ? "Image unavailable" : safeName}
            </span>
          </div>
        )}

        <button
          type="button"
          aria-label={`Add ${safeName} to favorites`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-pink-500 shadow-md transition hover:bg-pink-500 hover:text-white"
        >
          <Heart size={18} strokeWidth={1.8} />
        </button>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-center gap-1 text-xs">
          <span className="tracking-tight text-amber-400">★★★★★</span>
          <span className="text-gray-400">(5.0)</span>
        </div>

        <Link
          to={`/products/${productId}`}
          className="mt-2 line-clamp-1 text-sm font-bold text-gray-900 transition hover:text-pink-500 sm:text-base"
        >
          {safeName}
        </Link>

        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-gray-500 sm:text-sm">
          {safeDescription}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="shrink-0 text-base font-extrabold text-pink-500 sm:text-lg">
            {safePrice}
          </span>

          <button
            type="button"
            onClick={() => addToCart(product)}
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
