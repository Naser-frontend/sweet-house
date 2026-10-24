
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    category: "Cakes",
    description:
      "A rich and delicious chocolate cake made with quality ingredients. Perfect for birthdays, celebrations, and every sweet moment.",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "strawberry-cupcake",
    name: "Strawberry Cupcake",
    category: "Cakes",
    description:
      "A soft and fluffy cupcake topped with creamy strawberry frosting.",
    price: 5,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "chocolate-cookies",
    name: "Chocolate Cookies",
    category: "Cookies",
    description:
      "Freshly baked cookies filled with chocolate chips. Crispy outside and soft inside.",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "candy-mix",
    name: "Candy Mix",
    category: "Candy",
    description:
      "A colorful selection of sweet candies for sharing, gifting, and enjoying.",
    price: 6,
    image:
      "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "vanilla-cake",
    name: "Vanilla Cake",
    category: "Cakes",
    description:
      "A classic vanilla cake with soft texture and creamy frosting.",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    category: "Chocolate",
    description:
      "A rich, fudgy chocolate brownie with a delicious cocoa flavor.",
    price: 7,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "macaron-box",
    name: "Macaron Box",
    category: "Cookies",
    description:
      "Colorful French macarons with delicate shells and a sweet filling.",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    category: "Chocolate",
    description:
      "Enjoy the rich taste of dark chocolate, perfect for chocolate lovers.",
    price: 9,
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1000&q=85",
  },
];

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((item) => item.id === productId);

  function increaseQuantity() {
    setQuantity((current) => current + 1);
    setAddedToCart(false);
  }

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
    setAddedToCart(false);
  }

  function handleAddToCart() {
    if (!product) return;

    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity,
    });

    setAddedToCart(true);
  }

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#fffafc] px-4 py-16">
        <div className="max-w-lg rounded-3xl bg-white p-8 text-center shadow-sm">
          <span className="text-6xl">🍰</span>

          <h1 className="mt-5 text-2xl font-extrabold text-gray-900">
            Product Not Found
          </h1>

          <p className="mt-3 leading-7 text-gray-500">
            Sorry, we could not find this product.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex rounded-full bg-pink-500 px-7 py-3 font-semibold text-white transition hover:bg-pink-600"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fffafc] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="transition hover:text-pink-500">
            Home
          </Link>

          <span>/</span>

          <Link
            to="/products"
            className="transition hover:text-pink-500"
          >
            Products
          </Link>

          <span>/</span>

          <span className="font-medium text-pink-600">
            {product.name}
          </span>
        </nav>

        {/* Main Product Card */}
        <section className="grid grid-cols-1 gap-8 rounded-3xl border border-pink-50 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-10">
          {/* Product Image */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-pink-50 sm:min-h-[420px] lg:min-h-[500px]">
            {!imageFailed ? (
              <img
                src={product.image}
                alt={product.name}
                onError={() => setImageFailed(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 text-pink-500">
                <span className="text-6xl">🍰</span>
                <span className="text-sm">
                  Product image unavailable
                </span>
              </div>
            )}

            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-pink-600 shadow-sm">
              {product.category}
            </span>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center py-2 sm:py-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
              Sweet Collection
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-lg tracking-wide text-amber-400">
                ★★★★★
              </span>

              <span className="text-sm text-gray-500">
                5.0 (12 reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-3xl font-extrabold text-pink-600">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              {product.description}
            </p>

            <div className="my-7 border-t border-pink-100" />

            {/* Quantity */}
            <div>
              <p className="mb-3 text-sm font-bold text-gray-900">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-full border border-pink-100">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 items-center justify-center text-xl text-gray-700 transition hover:bg-pink-50 hover:text-pink-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  −
                </button>

                <span className="flex h-11 w-12 items-center justify-center border-x border-pink-100 text-sm font-bold text-gray-900">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 items-center justify-center text-xl text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-6 flex items-center justify-between rounded-xl bg-pink-50 px-4 py-3">
              <span className="text-sm font-medium text-gray-600">
                Total Price
              </span>

              <span className="text-lg font-extrabold text-pink-600">
                ${(product.price * quantity).toFixed(2)}
              </span>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 w-full rounded-full bg-pink-500 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-pink-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
            >
              {addedToCart ? "Add More to Cart ✓" : "Add to Cart"}
            </button>

            {addedToCart && (
              <p
                role="status"
                className="mt-3 text-center text-sm font-medium text-green-600"
              >
                Product added to your cart successfully!
              </p>
            )}

            <p className="mt-4 text-center text-xs text-gray-400">
              Made with love for your sweetest moments ♡
            </p>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
                You may also like
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Related Products
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={"/products/" + item.id}
                  className="group overflow-hidden rounded-2xl border border-pink-50 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-48 overflow-hidden bg-pink-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 p-4">
                    <div>
                      <h3 className="font-bold text-gray-900 transition group-hover:text-pink-600">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.category}
                      </p>
                    </div>

                    <span className="shrink-0 font-extrabold text-pink-600">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductDetails;