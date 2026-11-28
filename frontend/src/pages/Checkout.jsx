import { useState } from "react";
import { useCart } from "../context/useCart";

function Checkout() {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "", form: "" }));
    setIsSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!formData.city.trim()) nextErrors.city = "City is required.";
    if (!formData.address.trim()) nextErrors.address = "Full address is required.";

    setErrors(nextErrors);
    setIsSubmitted(Object.keys(nextErrors).length === 0);
  }

  const inputClass = (field) =>
    `mt-2 h-11 w-full rounded-xl border bg-[#fffafc] px-3 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-pink-100 ${
      errors[field]
        ? "border-red-300 focus:border-red-400"
        : "border-pink-100 focus:border-pink-400"
    }`;

  const deliveryFee = 0;
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const finalTotal = subtotal + deliveryFee;

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#fffafc] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">
            Sweet House Checkout
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
            Complete your order
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Review your order and share your details when you are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] lg:gap-8">
          <section className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
                Step 1
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#25191d] sm:text-3xl">
                Customer Information
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Your delivery and contact details will be added here in the next step.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="checkout-full-name" className="text-sm font-semibold text-[#25191d]">Full Name</label>
                  <input id="checkout-full-name" name="fullName" value={formData.fullName} onChange={handleChange} autoComplete="name" placeholder="Enter your full name" aria-invalid={Boolean(errors.fullName)} className={inputClass("fullName")} />
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="checkout-email" className="text-sm font-semibold text-[#25191d]">Email Address</label>
                  <input id="checkout-email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="Enter your email" aria-invalid={Boolean(errors.email)} className={inputClass("email")} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="checkout-phone" className="text-sm font-semibold text-[#25191d]">Phone Number</label>
                  <input id="checkout-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" placeholder="Enter your phone number" aria-invalid={Boolean(errors.phone)} className={inputClass("phone")} />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="checkout-city" className="text-sm font-semibold text-[#25191d]">City</label>
                  <input id="checkout-city" name="city" value={formData.city} onChange={handleChange} autoComplete="address-level2" placeholder="Enter your city" aria-invalid={Boolean(errors.city)} className={inputClass("city")} />
                  {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="checkout-address" className="text-sm font-semibold text-[#25191d]">Full Address</label>
                <textarea id="checkout-address" name="address" value={formData.address} onChange={handleChange} autoComplete="street-address" placeholder="Enter your complete delivery address" aria-invalid={Boolean(errors.address)} className={`${inputClass("address")} min-h-24 resize-y py-3`} />
                {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="checkout-notes" className="text-sm font-semibold text-[#25191d]">Additional Notes <span className="font-normal text-gray-400">(Optional)</span></label>
                <textarea id="checkout-notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Add delivery notes if needed" className={`${inputClass("notes")} min-h-20 resize-y py-3`} />
              </div>

              <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg">
                Continue
              </button>
              {isSubmitted && <p className="text-center text-sm font-semibold text-green-600">Information saved for the next step.</p>}
            </form>
          </section>

          <aside className="rounded-2xl border border-pink-100 bg-gradient-to-br from-[#fff0f5] to-[#ffe0ec] p-5 shadow-sm sm:p-7 lg:p-8">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
                Step 2
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#25191d] sm:text-3xl">
                Order Summary
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Review your selected sweets before placing the order.
              </p>
            </div>

            <div className="space-y-4">
              {cartItems.length > 0 ? (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 rounded-xl border border-pink-100 bg-white/80 p-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-pink-50">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        ) : (
                          <span className="flex h-full items-center justify-center text-[10px] text-pink-400">No image</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-[#25191d]">{item.name}</p>
                        <p className="mt-1 text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="shrink-0 text-sm font-bold text-pink-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-pink-200 bg-white/70 px-5 py-10 text-center sm:px-8">
                  <p className="text-base font-bold text-[#25191d]">Your cart is empty</p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">Add some sweets before placing an order.</p>
                </div>
              )}

              <div className="rounded-2xl border border-pink-100 bg-white/80 p-4 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#25191d]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-pink-100 pt-4 text-base font-bold text-[#25191d]">
                  <span>Final Total</span>
                  <span className="text-xl text-pink-600">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                disabled={cartItems.length === 0}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-pink-500"
              >
                Place Order
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
