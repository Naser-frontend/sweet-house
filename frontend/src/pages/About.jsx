import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import aboutHero from "../assets/image/about/Strawberry Chocolate Drip Cake.png";
import storyImage from "../assets/image/about/Pink and chocolate cupcakes.png";
import missionIcon from "../assets/image/about/Cake slice illustration.svg";

function About() {
  return (
    <div className="bg-white">
      <main>
        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#fff0f5] via-[#ffe8f0] to-[#ffd6e6] md:min-h-[560px] md:grid-cols-2 md:items-center lg:rounded-3xl">
            <div className="order-2 px-2 py-10 text-center sm:px-8 md:order-1 md:px-8 md:py-16 md:text-left lg:px-10">
              <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-pink-500 md:justify-start">
                <span className="h-px w-5 bg-pink-500" aria-hidden="true" />
                About Us
                <span className="h-px w-5 bg-pink-500" aria-hidden="true" />
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#25191d] sm:text-5xl lg:text-6xl">
                Sweet House
                <span className="mt-2 block text-pink-500">A Little More Sweetness <Heart className="mb-1 inline-block" size={34} fill="currentColor" aria-hidden="true" /></span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base md:mx-0">
                Welcome to Sweet House! We are passionate about making life sweeter with delicious cakes, cupcakes, cookies and more.
              </p>
              <Link to="/products" className="mt-6 inline-flex items-center gap-3 rounded-full bg-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg">
                Explore Our Treats <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="order-1 flex min-h-[300px] items-center justify-center px-4 pt-8 sm:min-h-[380px] sm:px-8 md:order-2 md:min-h-[560px] md:px-2 md:pt-0">
              <img src={aboutHero} alt="Strawberry chocolate drip cake" className="max-h-[390px] w-full object-contain drop-shadow-xl sm:max-h-[480px] md:max-h-[540px]" />
            </div>
          </div>
        </section>

        <section className="bg-[#fff9fb] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-[0_8px_24px_rgba(236,72,153,0.08)]">
              <img src={storyImage} alt="Pink and chocolate cupcakes" className="h-64 w-full object-cover sm:h-80" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">Our Story</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl">Baked with care,<span className="block text-pink-500">shared with love</span></h2>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">Sweet House started with a simple idea: every day feels better with a freshly baked treat. From family celebrations to little everyday joys, we make sweets that bring people together.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">We choose quality ingredients, bake with patience, and add a little creativity to every cake, cupcake, cookie, and chocolate we make.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-3xl border border-pink-100 bg-white p-6 shadow-[0_8px_30px_rgba(236,72,153,0.08)] sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10 lg:p-12">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 p-5 lg:mx-0"><img src={missionIcon} alt="" aria-hidden="true" className="h-full w-full object-contain" /></div>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-500 lg:justify-start"><Sparkles size={15} aria-hidden="true" /> Our Mission</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#25191d] sm:text-4xl">Bringing happiness in every bite</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">Our mission is to spread joy through high-quality, freshly baked sweets made with love, care, and a commitment to making every customer feel special.</p>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default About;
