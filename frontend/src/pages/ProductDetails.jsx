import { useState } from "react";
import { useParams } from "react-router-dom";

import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { productId } = useParams();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const product = {
    id: productId,
    name: productId.replaceAll("-", " "),
    description:
      "Enjoy our delicious and freshly prepared sweet treat. Made with quality ingredients and carefully prepared to give you a wonderful taste and experience.",
    price: 15,
    quantity: quantity,
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Product Details Card */}
        <div className="grid grid-cols-1 gap-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:p-10">

          {/* Product Image */}
          <div className="flex min-h-[350px] items-center justify-center rounded-3xl bg-pink-100 sm:min-h-[450px]">
            <span className="text-sm font-medium text-pink-400">
              Product Image
            </span>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
              Sweet Collection
            </p>

            {/* Product Name */}
            <h1 className="mt-3 text-3xl font-extrabold capitalize text-gray-900 sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <span className="text-yellow-400">
                ★★★★★
              </span>

              <span className="text-sm text-gray-500">
                5.0 (12 reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-3xl font-extrabold text-pink-500">
              ${product.price}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-gray-900">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-full border border-gray-200">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 items-center justify-center text-lg text-gray-600 transition hover:bg-pink-50 hover:text-pink-500"
                >
                  −
                </button>

                <span className="flex h-10 w-12 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 items-center justify-center text-lg text-gray-600 transition hover:bg-pink-50 hover:text-pink-500"
                >
                  +
                </button>

              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 w-full rounded-full bg-pink-500 px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-pink-600 hover:shadow-lg sm:w-fit"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;