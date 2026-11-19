import { ArrowRight, Heart } from "lucide-react";
import aboutHero from "../assets/image/about/Strawberry Chocolate Drip Cake.png";
import aboutImage from "../assets/image/about/Pink and chocolate cupcakes.png";
import missionIcon from "../assets/image/about/Cake slice illustration.svg";

function About() {
  return (
    <main className="min-h-screen bg-[#fff8fa]">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#fff1f5] via-[#ffe6ee] to-[#ffd7e5] px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-pink-200/50 blur-2xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-4">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-pink-500">About Us</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1f1b26] sm:text-5xl lg:text-6xl">
              Sweet House<br /><span className="text-pink-500">Our Story</span>{" "}
              <Heart className="mb-1 inline-block text-pink-500" size={34} fill="currentColor" aria-hidden="true" />
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#4b4050] sm:text-base">
              Welcome to Sweet House! We are passionate about making life sweeter with delicious cakes, cupcakes, cookies and more.
            </p>
            <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-pink-600">
              Learn More <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="relative flex min-h-64 items-center justify-center sm:min-h-80 lg:min-h-[26rem]">
            <div className="absolute right-0 h-64 w-64 rounded-full bg-pink-200/60 blur-3xl sm:h-80 sm:w-80" />
            <img src={aboutHero} alt="Chocolate cake topped with strawberries" className="relative z-10 h-full max-h-[26rem] w-full object-contain mix-blend-multiply" />
          </div>
        </div>
      </section>

      <section className="bg-[#fff9fb] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-[0_8px_24px_rgba(236,72,153,0.08)]">
            <img src={aboutImage} alt="Pink and chocolate cupcakes from Sweet House" className="h-56 w-full object-cover sm:h-64" />
          </div>
          <div className="rounded-2xl bg-white/70 p-2 sm:p-5">
            <div className="flex items-center gap-4">
              <img src={missionIcon} alt="" aria-hidden="true" className="h-14 w-14 shrink-0" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">Our Mission</p>
            </div>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl">
              Bringing Happiness
              <br />
              <span className="text-pink-500">in Every Bite</span>{" "}
              <Heart className="mb-1 inline-block text-pink-500" size={24} fill="currentColor" aria-hidden="true" />
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Our mission is to spread joy and happiness through high-quality, freshly baked sweets made with love.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
