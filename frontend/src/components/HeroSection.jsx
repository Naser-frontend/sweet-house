import heroImage from "../assets/hero-cake.png";
import { Link } from "react-router-dom";



function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-[#fff1f5] via-[#ffe8ef] to-[#ffd6d2]">
      <div className="mx-auto grid min-h-[570px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-4 lg:min-h-[620px] lg:px-10 lg:py-14">
        {/* Left Side */}
        <div className="relative z-10 text-center md:text-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-pink-600 sm:text-sm">
            Fresh <span className="mx-2">•</span> Delicious
            <span className="mx-2">•</span> Always
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#25191d] sm:text-5xl lg:text-6xl xl:text-7xl">
            Sweet Moments
            <span className="mt-1 block text-pink-500">
              Start Here <span className="font-medium">♡</span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 md:mx-0">
            Discover a world of sweet treats, from our freshly baked cakes
            to our delicious cookies. Made with love, just for you!
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-base"
          >
            Shop Now <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right Side - Online Cake Photo */}
        <div className="relative mx-auto flex w-auto max-w-[1000px] items-center justify-center md:min-h-[440px]  lg:min-h-[500px]">

          <img
            src={heroImage}
            alt="Delicious chocolate cake"
            fetchPriority="high"
            className="relative z-10 h-auto max-h-[360px] w-full object-contain sm:max-h-[430px] lg:max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
