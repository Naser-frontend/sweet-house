import { BadgeCheck, Headset, Heart, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import aboutHero from "../assets/image/about/Strawberry Chocolate Drip Cake.png";
import storyImage from "../assets/image/products-image/cupcakes-pro.jpg";
import ctaImage from "../assets/image/about/Strawberry Cake and Cupcake Delight.png";

const values = [
  {
    icon: BadgeCheck,
    title: "Quality",
    description: "We choose dependable ingredients and take pride in every detail.",
  },
  {
    icon: Leaf,
    title: "Freshness",
    description: "Our sweets are prepared with care so every bite feels fresh.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "We add a thoughtful, joyful touch to every recipe and design.",
  },
  {
    icon: Headset,
    title: "Customer Care",
    description: "Your happiness is at the heart of every Sweet House moment.",
  },
];

function About() {
  return (
    <div className="bg-white">
      <main>
        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-pink-100 bg-gradient-to-br from-[#fff7fa] via-[#ffeaf2] to-[#ffd1e3] shadow-[0_14px_34px_rgba(236,72,153,0.1)] md:min-h-[520px] md:grid-cols-2 md:items-center lg:rounded-3xl">
            <div className="order-2 px-2 py-10 text-center sm:px-8 md:order-1 md:px-10 md:py-16 md:text-left lg:px-14">
              <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-pink-500 md:justify-start">
                <span className="h-px w-5 bg-pink-500" aria-hidden="true" />
                About Us
                <span className="h-px w-5 bg-pink-500" aria-hidden="true" />
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#25191d] sm:text-5xl lg:text-6xl">
                Sweet House
                <span className="mt-2 block text-pink-500">
                  Our Story <Heart className="mb-1 inline-block" size={34} fill="currentColor" aria-hidden="true" />
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base md:mx-0">
                Welcome to Sweet House! We are passionate about making life sweeter with delicious cakes, cupcakes, cookies and more.
              </p>
              <Link to="/products" className="mt-7 inline-flex items-center gap-3 rounded-full bg-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg">
                Explore Our Treats <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="order-1 flex min-h-[290px] items-center justify-center px-4 pt-8 sm:min-h-[360px] sm:px-8 md:order-2 md:min-h-[520px] md:px-2 md:pt-0">
              <img src={aboutHero} alt="Strawberry chocolate drip cake" className="max-h-[360px] w-full object-contain drop-shadow-xl sm:max-h-[430px] md:max-h-[480px]" />
            </div>
          </div>
        </section>

        <section className="bg-[#fff9fb] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white p-2 shadow-[0_12px_30px_rgba(236,72,153,0.1)] sm:rounded-3xl">
              <img src={storyImage} alt="Pink and chocolate cupcakes" className="h-72 w-full rounded-xl object-cover sm:h-96 sm:rounded-2xl" />
            </div>
            <div className="lg:pr-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">Our Story</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl lg:text-5xl">Baked with care,<span className="block text-pink-500">shared with love</span></h2>
              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">Sweet House started with a simple idea: every day feels better with a freshly baked treat. From family celebrations to little everyday joys, we make sweets that bring people together.</p>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">We choose quality ingredients, bake with patience, and add a little creativity to every cake, cupcake, cookie, and chocolate we make.</p>
              <Link to="/products" className="mt-6 inline-flex items-center gap-2 font-bold text-pink-600 transition hover:text-pink-700">Discover our collection <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
        </section>

        <section className="bg-[#fff8fa] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">What We Believe In</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">Our <span className="text-pink-500">Values</span></h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">The principles that guide the way we bake, serve, and care for our customers.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="rounded-2xl border border-pink-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(236,72,153,0.12)]">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-500"><Icon size={27} strokeWidth={1.9} aria-hidden="true" /></div>
                    <h3 className="mt-5 text-lg font-bold text-[#25191d]">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl border border-pink-100 bg-gradient-to-br from-[#fff7fa] via-[#fff0f5] to-[#ffe0ed] p-6 shadow-[0_12px_32px_rgba(236,72,153,0.1)] sm:p-8 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">The Sweet House Difference</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#25191d] sm:text-4xl">What Makes Sweet House Special?</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">We turn simple ingredients into joyful experiences by combining thoughtful recipes, careful preparation, and a genuine love for the people we serve.</p>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-[#25191d] sm:grid-cols-2">
              <span className="rounded-xl border border-pink-100 bg-white/75 px-4 py-3.5 shadow-sm">Thoughtful recipes</span>
              <span className="rounded-xl border border-pink-100 bg-white/75 px-4 py-3.5 shadow-sm">Care in every detail</span>
              <span className="rounded-xl border border-pink-100 bg-white/75 px-4 py-3.5 shadow-sm">Celebration-ready treats</span>
              <span className="rounded-xl border border-pink-100 bg-white/75 px-4 py-3.5 shadow-sm">A warm customer experience</span>
            </div>
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-br from-[#fff0f5] via-[#ffd9e8] to-[#ffb9d6] shadow-[0_14px_34px_rgba(236,72,153,0.12)] sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-700">Make your day sweeter</p>
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl lg:text-[2.65rem]">Life is Better with Sweets</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#5c3948] sm:text-base">Find a delicious favorite for yourself or share a little happiness with someone special.</p>
              <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg">Explore Our Products <span aria-hidden="true">&rarr;</span></Link>
            </div>
            <div className="flex items-end justify-center px-6 pt-2 sm:h-full sm:px-4 sm:pt-0"><img src={ctaImage} alt="Strawberry cake and cupcake" className="max-h-56 w-full object-contain sm:max-h-64 lg:max-h-72" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
