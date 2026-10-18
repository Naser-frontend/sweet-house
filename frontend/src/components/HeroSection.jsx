import heroImage from "../assets/hero-cake.png";

function HeroSection() {
  return (
    <section className="bg-pink-100">
      <div className="mx-auto flex min-h-[600px] max-w-7xl  flex-col items-center gap-12 px-6 py-16 sm:px-8 md:flex-row md:gap-8 lg:px-10">
        {/* Left Side - Text */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="mb-6 inline-flex items-center rounded-full bg-pink-100 px-5 py-2 text-sm font-medium text-pink-500">
            🍰 Fresh & Delicious
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Sweet Moments,
            <span className="block text-pink-500">
              Delivered Daily
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
            Indulge in delicious cakes, cookies, chocolates and more.
            Made with love, just for you!
          </p>

          <button
            type="button"
            className="mt-8 rounded-full bg-pink-500 px-8 py-4 text-base font-semibold text-white shadow-md transition duration-300 hover:bg-pink-600 hover:shadow-lg sm:text-lg"
          >
            Shop Now →
          </button>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="w-full max-w-md overflow-hidden rounded-[40px] shadow-xl sm:max-w-lg">
            <img
              src={heroImage}
              alt="Delicious strawberry cake"
              className="h-[500px] w-full object-cover  sm:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;