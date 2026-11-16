import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#fff8fa] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
            Your Shopping Cart
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
            Your <span className="text-pink-500">Cart</span>
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Review your items and proceed to checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-pink-100 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
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
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:p-5 ${
                    index > 0 ? "border-t border-pink-100" : ""
                  }`}
                >
                  <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl bg-pink-50 sm:w-24">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center text-xs text-pink-400">
                        Image unavailable
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-base font-bold text-[#25191d] sm:text-lg">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      ${item.price.toFixed(2)} per item
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="flex items-center overflow-hidden rounded-full border border-pink-100">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-pink-50 hover:text-pink-500"
                      >
                        <Minus size={15} />
                      </button>
                      <span className="flex h-9 w-10 items-center justify-center border-x border-pink-100 text-sm font-semibold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-pink-50 hover:text-pink-500"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <p className="min-w-16 text-right text-base font-extrabold text-pink-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeFromCart(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-pink-500 transition hover:bg-pink-50 hover:text-pink-600"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6">
              <h2 className="text-xl font-extrabold text-[#25191d]">
                Order Summary
              </h2>
              <div className="mt-5 space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span>{itemCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="flex items-center justify-between border-t border-pink-100 pt-4 text-base font-bold text-[#25191d]">
                  <span>Total</span>
                  <span className="text-xl text-pink-500">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-pink-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-pink-600 hover:shadow-md"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/products"
                className="mt-4 block text-center text-sm font-semibold text-pink-500 transition hover:text-pink-600"
              >
                Continue Shopping &rarr;
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
