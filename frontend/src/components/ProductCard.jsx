
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const productImages = {
  "Chocolate Cake":
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",

  "Strawberry Cupcake":
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80",

  "Chocolate Cookies":
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",

  "Candy Mix":
    "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80",

  "Vanilla Cake":
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",

  "Chocolate Brownie":
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",

  "Macaron Box":
    "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",

  "Dark Chocolate":
    "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
};

function ProductCard({ name, description, price }) {
  const { addToCart } = useCart();
  const [imageFailed, setImageFailed] = useState(false);

  // Protect against a missing product name.
  const safeName =
    typeof name === "string" && name.trim()
      ? name
      : "Sweet Treat";

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

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-pink-100">
        {image && !imageFailed ? (
          <img
            src={image}
            alt={safeName}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-pink-500">
            <span className="text-4xl">🍰</span>
            <span className="text-sm font-medium">
              {imageFailed ? "Image unavailable" : safeName}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          aria-label={`Add ${safeName} to favorites`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-pink-500 shadow-md transition hover:bg-pink-500 hover:text-white"
        >
          ♡
        </button>
      </div>

      {/* Product Information */}
      <div className="p-6">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-400">(5.0)</span>
        </div>

        <Link
          to={`/products/${productId}`}
          className="mt-3 block text-xl font-bold text-gray-900 transition hover:text-pink-500"
        >
          {safeName}
        </Link>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {safeDescription}
        </p>

        {/* Price and Add to Cart */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-pink-500">
            {safePrice}
          </span>

          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
