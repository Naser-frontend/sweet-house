function HeroSection() {
  return (
    <section className="bg-pink-50">
      <div className="mx-auto flex min-h-[600px] max-w-7xl flex-col items-center gap-12 px-6 py-16 sm:px-8 md:flex-row md:gap-8 lg:px-10">

        {/* Left Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-pink-100 px-5 py-2 text-sm font-medium text-pink-500">
            🍰 Fresh & Delicious
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Sweet Moments,
            <span className="block text-pink-500">
              Delivered Daily
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
            Indulge in delicious cakes, cookies, chocolates and more.
            Made with love, just for you!
          </p>

          {/* Button */}
          <button className="mt-8 rounded-full bg-pink-500 px-8 py-4 text-base font-semibold text-white shadow-md transition duration-300 hover:bg-pink-600 hover:shadow-lg sm:text-lg">
            Shop Now →
          </button>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="flex h-[300px] w-full max-w-xl items-center justify-center rounded-[40px] bg-pink-100 shadow-sm sm:h-[380px] lg:h-[420px]">
            <span className="text-base font-medium text-pink-400 sm:text-lg">
              Hero Image
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;