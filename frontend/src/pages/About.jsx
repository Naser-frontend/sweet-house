import { Heart } from "lucide-react";
import aboutImage from "../assets/image/products-image/cupcakes-pro.jpg";

function About() {
  return (
    <main className="min-h-screen bg-[#fff8fa]">
      <section className="bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
          Sweet Moments Start Here
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
          About <span className="text-pink-500">Us</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
          Learn more about the sweetness behind Sweet House.
        </p>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl bg-pink-100 shadow-sm">
            <img
              src={aboutImage}
              alt="Fresh cupcakes from Sweet House"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl">
              Made for your <span className="text-pink-500">sweet moments</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Sweet House brings cakes, cookies, candies, and chocolates
              together in one cheerful place. We want every treat to make an
              ordinary moment feel a little more special.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Browse your favorite sweets, choose what you love, and share a
              little happiness with the people around you.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-pink-50 px-4 py-3 text-sm font-semibold text-[#25191d]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white">
                <Heart size={18} fill="currentColor" aria-hidden="true" />
              </span>
              Made with care for every celebration
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
