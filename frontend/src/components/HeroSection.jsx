import { Link } from "react-router-dom";
import heroImage from "../assets/image/hero-cake.png";

function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#fff1f5]">
      <div className="mx-auto grid min-h-[570px] max-w-7xl grid-cols-1 overflow-hidden sm:rounded-b-3xl md:grid-cols-2 md:items-stretch">
        <div className="relative z-10 flex flex-col justify-center px-5 py-14 text-center sm:px-10 md:px-12 md:text-left lg:px-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-pink-600 sm:text-sm">
            Fresh <span className="mx-2">&bull;</span> Delicious
            <span className="mx-2">&bull;</span> Always
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#25191d] sm:text-5xl lg:text-6xl">
            Sweet Moments
            <span className="mt-1 block text-pink-500">
              Start Here <span className="font-medium">&#9825;</span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 md:mx-0">
            Discover a world of sweet treats, from our freshly baked cakes
            to our delicious cookies. Made with love, just for you!
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex w-fit self-center items-center gap-2 rounded-full bg-pink-500 px-7 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-base md:self-start"
          >
            Shop Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="relative h-[330px] overflow-hidden sm:h-[430px] md:h-auto md:min-h-[570px]">
          <img
            src={heroImage}
            alt="Chocolate cake with strawberries, cupcakes, cookies, and candy"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full -translate-y-8 object-contain object-bottom md:-translate-y-10"
          />
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fff1f5]/60 to-transparent md:w-20" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
