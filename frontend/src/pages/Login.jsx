import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import bakeryImage from "../assets/image/about/logimg.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100vh-5rem)] overflow-x-hidden bg-[#fffafc] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto grid min-h-[620px] w-full max-w-6xl items-stretch overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-[0_18px_45px_rgba(236,72,153,0.12)] lg:grid-cols-[0.9fr_1.1fr] lg:rounded-3xl">
        <section className="flex min-w-0 flex-col items-center justify-center bg-gradient-to-br from-[#fff0f5] via-[#ffe4ee] to-[#ffd4e4] px-5 py-12 text-center sm:px-12 sm:py-14 lg:px-10 lg:py-16">
          <div className="flex w-full max-w-sm flex-col items-center">
            <img
              src={bakeryImage}
              alt="Strawberry cupcake with fresh fruit"
              className="h-48 w-full max-w-[18rem] object-contain drop-shadow-xl sm:h-60 sm:max-w-[20rem]"
            />

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
              Welcome Back!
            </h1>
            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600 sm:text-base">
              Log in to your Sweet House account and keep enjoying your favorite sweet moments.
            </p>
          </div>
        </section>

        <section className="flex min-w-0 items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="w-full max-w-md">
            <div className="grid grid-cols-2 rounded-full border border-pink-100 bg-[#fff8fa] p-1">
              <button type="button" className="min-h-11 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-pink-600 shadow-sm" aria-current="page" aria-selected="true">
                Login
              </button>
              <button type="button" className="min-h-11 rounded-full px-4 py-2.5 text-sm font-semibold text-gray-500 transition hover:bg-white/70 hover:text-pink-500">
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
                    <input id="login-email" name="email" type="email" autoComplete="email" required placeholder="Enter your email" className="h-12 w-full rounded-xl border border-pink-100 bg-[#fffafc] pl-11 pr-4 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <label htmlFor="login-password" className="text-sm font-semibold text-[#25191d]">Password</label>
                    <button type="button" className="text-xs font-semibold text-pink-600 transition hover:text-pink-700">Forgot password?</button>
                  </div>
                  <div className="relative mt-2">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="login-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required placeholder="Enter your password" className="h-12 w-full rounded-xl border border-pink-100 bg-[#fffafc] pl-11 pr-12 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                    <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-500">
                      {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg">Login</button>
              </form>

              <div className="my-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                <span className="h-px flex-1 bg-pink-100" />
                or continue with
                <span className="h-px flex-1 bg-pink-100" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button type="button" className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-100 bg-white px-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-pink-200 hover:bg-pink-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path fill="#4285F4" d="M21.35 12.23c0-.7-.06-1.37-.18-2.02H12v3.82h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.19Z" />
                    <path fill="#34A853" d="M12 21.75c2.63 0 4.84-.87 6.45-2.33l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.75 9.75 0 0 0 12 21.75Z" />
                    <path fill="#FBBC05" d="M6.53 13.86a5.86 5.86 0 0 1 0-3.72V7.61H3.29a9.75 9.75 0 0 0 0 8.78l3.24-2.53Z" />
                    <path fill="#EA4335" d="M12 6.11c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.24 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.71 5.36l3.24 2.53C7.3 7.83 9.46 6.11 12 6.11Z" />
                  </svg>
                  <span className="sr-only">Continue with Google</span>
                </button>
                <button type="button" className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-100 bg-white px-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-pink-200 hover:bg-pink-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.04 1.79-4.72 4.55-4.72 1.32 0 2.7.24 2.7.24v2.99h-1.52c-1.5 0-1.97.94-1.97 1.9v2.25h3.35l-.54 3.49h-2.81V24C19.61 23.09 24 18.09 24 12.07Z" />
                  </svg>
                  <span className="sr-only">Continue with Facebook</span>
                </button>
                <button type="button" className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-100 bg-white px-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-pink-200 hover:bg-pink-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#25191d]" fill="currentColor" aria-hidden="true">
                    <path d="M16.36 12.9c-.02-2.4 1.96-3.56 2.05-3.61a4.41 4.41 0 0 0-3.47-1.88c-1.46-.15-2.87.87-3.61.87-.75 0-1.91-.85-3.14-.83a4.63 4.63 0 0 0-3.9 2.38c-1.68 2.92-.43 7.2 1.18 9.56.8 1.16 1.73 2.45 2.96 2.4 1.2-.05 1.65-.77 3.1-.77 1.45 0 1.86.77 3.12.74 1.29-.02 2.1-1.17 2.87-2.34a9.6 9.6 0 0 0 1.31-2.7 4.18 4.18 0 0 1-2.47-3.82ZM14 5.86a4.2 4.2 0 0 0 .96-3.03 4.28 4.28 0 0 0-2.77 1.44 4 4 0 0 0-1 2.92A3.54 3.54 0 0 0 14 5.86Z" />
                  </svg>
                  <span className="sr-only">Continue with Apple</span>
                </button>
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
