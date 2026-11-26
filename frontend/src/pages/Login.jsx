import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import bakeryImage from "../assets/image/about/logimg.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
              <p className="mt-3 text-sm leading-6 text-gray-600">Welcome back! Enter your details to continue.</p>

              <form onSubmit={(event) => event.preventDefault()} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="login-email" className="text-sm font-semibold text-[#25191d]">Email Address</label>
                  <div className="relative mt-2">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="login-email" name="email" type="email" autoComplete="email" required placeholder="Enter your email" className="w-full rounded-xl border border-pink-100 bg-[#fffafc] py-3.5 pl-11 pr-4 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <label htmlFor="login-password" className="text-sm font-semibold text-[#25191d]">Password</label>
                    <button type="button" className="text-xs font-semibold text-pink-600 transition hover:text-pink-700">Forgot password?</button>
                  </div>
                  <div className="relative mt-2">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="login-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required placeholder="Enter your password" className="w-full rounded-xl border border-pink-100 bg-[#fffafc] py-3.5 pl-11 pr-12 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                    <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-500">
                      {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg">Login</button>
              </form>

              <div className="my-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                <span className="h-px flex-1 bg-pink-100" />
                or continue with
                <span className="h-px flex-1 bg-pink-100" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-100 bg-white px-3 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-pink-200 hover:bg-pink-50"><span className="text-base font-extrabold text-[#4285f4]" aria-hidden="true">G</span><span className="sr-only">Continue with Google</span></button>
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-100 bg-white px-3 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-pink-200 hover:bg-pink-50"><span className="text-lg font-extrabold text-[#1877f2]" aria-hidden="true">f</span><span className="sr-only">Continue with Facebook</span></button>
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-100 bg-white px-3 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-pink-200 hover:bg-pink-50"><span className="text-lg font-bold text-[#25191d]" aria-hidden="true"></span><span className="sr-only">Continue with Apple</span></button>
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
