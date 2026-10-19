
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-cake.png";

function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#fff0f5]">
      <div className="mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-6 lg:px-10 lg:py-16">
        {/* Left Side - Hero Text */}
        <div className="relative z-10 text-center md:text-left">
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-pink-500 sm:text-base">
            <span aria-hidden="true">🍰</span>
            Fresh • Delicious • Always
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Sweet Moments
            <span className="mt-2 block text-pink-500">
              Start Here ♡
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
            Discover a world of sweet treats, from our freshly baked cakes
            to our delicious cookies. Made with love, just for you!
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-lg sm:text-lg"
          >
            Shop Now
            <span aria-hidden="true">→</span>
          </Link>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 md:justify-start">
            <span>♡ Made with Love</span>
            <span>✦ Fresh Every Day</span>
          </div>
        </div>

        {/* Right Side - Cake Image */}
        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center md:min-h-[480px] lg:min-h-[540px]">
          <div
            aria-hidden="true"
            className="absolute h-[75%] w-[75%] rounded-full bg-pink-200/40 blur-3xl"
          />

          <img
            src={heroImage}
            alt="Fresh strawberry cake from Sweet House"
            fetchPriority="high"
            className="relative z-10 h-auto max-h-[420px] w-full object-contain sm:max-h-[500px] lg:max-h-[560px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
