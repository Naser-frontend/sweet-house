import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
            Your Shopping Cart
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Shopping Cart 🛒
          </h1>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="text-6xl">🛒</div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add some delicious sweets to your cart.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-block rounded-full bg-pink-500 px-7 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    {/* Product Image */}
                    <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-pink-100 sm:h-28 sm:w-28">
                      <span className="text-xs font-medium text-pink-400">
                        Image
                      </span>
                    </div>

                    {/* Product Information */}
                    <div className="flex-1">
                      <h2 className="text-xl font-bold capitalize text-gray-900">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        ${item.price} per item
                      </p>

                      {/* Quantity */}
                      <div className="mt-4 flex w-fit items-center overflow-hidden rounded-full border border-gray-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-lg text-gray-600 transition hover:bg-pink-50 hover:text-pink-500"
                        >
                          −
                        </button>

                        <span className="flex h-9 w-12 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-lg text-gray-600 transition hover:bg-pink-50 hover:text-pink-500"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price + Remove */}
                    <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                      <p className="text-xl font-bold text-pink-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-semibold text-red-500 transition hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-extrabold text-pink-500">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-7 w-full rounded-full bg-pink-500 px-6 py-4 font-semibold text-white shadow-md transition hover:bg-pink-600 hover:shadow-lg"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="mt-4 block text-center text-sm font-semibold text-pink-500 transition hover:text-pink-600"
              >
                Continue Shopping →
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;