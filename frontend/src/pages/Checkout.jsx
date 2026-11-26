function Checkout() {
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

            <div className="rounded-2xl border border-dashed border-pink-200 bg-[#fffafc] px-5 py-14 text-center sm:px-8">
              <p className="text-base font-bold text-[#25191d]">
                Customer information area
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Form fields will be added soon.
              </p>
            </div>
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
                Your selected sweets and total will appear here.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-pink-200 bg-white/70 px-5 py-14 text-center sm:px-8">
              <p className="text-base font-bold text-[#25191d]">
                Order summary area
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Order details will be connected in the next step.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
