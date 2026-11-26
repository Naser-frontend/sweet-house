import { Link } from "react-router-dom";

import bakeryImage from "../assets/image/about/logimg.png";

function Login() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#fffafc] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto grid min-h-[620px] max-w-6xl overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-[0_18px_45px_rgba(236,72,153,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
        <section className="flex flex-col items-center justify-center bg-gradient-to-br from-[#fff0f5] via-[#ffe4ee] to-[#ffd4e4] px-6 py-12 text-center sm:px-12 lg:px-10">
          <div className="flex w-full max-w-sm flex-col items-center">
            <img
              src={bakeryImage}
              alt="Strawberry cupcake with fresh fruit"
              className="h-52 w-72 object-contain drop-shadow-xl sm:h-64 sm:w-80"
            />

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
              Welcome Back!
            </h1>
            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600 sm:text-base">
              Log in to your Sweet House account and keep enjoying your favorite sweet moments.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">
          <div className="w-full max-w-md">
            <div className="grid grid-cols-2 rounded-full border border-pink-100 bg-[#fff8fa] p-1">
              <button type="button" className="rounded-full bg-white px-4 py-3 text-sm font-bold text-pink-600 shadow-sm" aria-current="page">
                Login
              </button>
              <button type="button" className="rounded-full px-4 py-3 text-sm font-semibold text-gray-500 transition hover:text-pink-500">
                Register
              </button>
            </div>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">Sweet House Account</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">Login to continue</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">Your login form will be ready here in the next step.</p>

              <div className="mt-8 rounded-2xl border border-dashed border-pink-200 bg-[#fffafc] p-6 text-center sm:p-8">
                <p className="text-sm font-semibold text-[#25191d]">Login form area</p>
                <p className="mt-2 text-sm leading-6 text-gray-500">Email, password, and social login options will be added next.</p>
              </div>

              <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-pink-600 transition hover:text-pink-700">
                Back to Sweet House
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
