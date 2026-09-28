import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ name, description, price }) {
  const { addToCart } = useCart();

  const productId = name.toLowerCase().replaceAll(" ", "-");

  const product = {
    id: productId,
    name: name,
    description: description,
    price: Number(price.replace("$", "")),
    quantity: 1,
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-pink-100">
        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm transition hover:bg-pink-50"
          aria-label={`Add ${name} to favorites`}
        >
          ♡
        </button>

        <span className="text-sm font-medium text-pink-400">
          Product Image
        </span>
      </div>

      {/* Product Information */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-400">(5.0)</span>
        </div>

        {/* Product Name */}
        <Link
          to={`/products/${productId}`}
          className="mt-3 block text-xl font-bold text-gray-900 transition hover:text-pink-500"
        >
          {name}
        </Link>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Price + Add to Cart */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-pink-500">
            {price}
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