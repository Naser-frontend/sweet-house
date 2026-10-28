// ظاهر کارت هر محصول و دکمه‌ی افزودن به سبد خرید
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import chocolateCakeImage from "../assets/image/products-image/chocolate-cake-pro.jpg";
import cupcakeImage from "../assets/image/products-image/cupcakes-pro.jpg";
import cookiesImage from "../assets/image/products-image/cookies-pro.jpg";
import candyImage from "../assets/image/products-image/candy-mix-pro.jpg";
import vanillaCakeImage from "../assets/image/products-image/strawberry-cake-pro.jpg";
import brownieImage from "../assets/image/products-image/chocolate-bar-pro.jpg";
import macaronsImage from "../assets/image/products-image/mocorn.jpg";
import chocolateImage from "../assets/image/products-image/darkchocollat.jpg";

const productImages = {
  "Chocolate Cake": chocolateCakeImage,
  "Strawberry Cupcake": cupcakeImage,
  "Chocolate Cookies": cookiesImage,
  "Candy Mix": candyImage,
  "Vanilla Cake": vanillaCakeImage,
  "Chocolate Brownie": brownieImage,
  "Macaron Box": macaronsImage,
  "Dark Chocolate": chocolateImage,
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
