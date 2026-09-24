function ProductCard({ name, description, price }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Product Image Placeholder */}
      <div className="flex h-64 items-center justify-center bg-pink-100">
        <span className="text-sm font-medium text-pink-400">
          Product Image
        </span>
      </div>

      {/* Product Information */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Price + Button */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-500">
            {price}
          </span>

          <button className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-600">
            Add to Cart
          </button>
        </div>

      </div>
    </article>
  );
}

export default ProductCard;