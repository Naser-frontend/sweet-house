import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import bakeryImage from "../assets/image/about/logimg.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "", form: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.password) {
      nextErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }
    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
  }

  const inputClass = (field) =>
    `h-12 w-full rounded-xl border bg-[#fffafc] text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-pink-100 ${
      errors[field]
        ? "border-red-300 focus:border-red-400"
        : "border-pink-100 focus:border-pink-400"
    }`;

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
              Join Sweet House!
            </h1>
            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600 sm:text-base">
              Create your account and start enjoying more sweet moments with us.
            </p>
          </div>
        </section>

        <section className="flex min-w-0 items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="w-full max-w-md">
            <div className="grid grid-cols-2 rounded-full border border-pink-100 bg-[#fff8fa] p-1">
              <Link
                to="/login"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-gray-500 transition hover:bg-white/70 hover:text-pink-500"
              >
                Login
              </Link>
              <span
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-bold text-pink-600 shadow-sm"
                aria-current="page"
              >
                Register
              </span>
            </div>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
                Sweet House Account
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
                Create your account
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Create an account to keep your favorite sweet moments close.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
                <div>
                  <label htmlFor="register-full-name" className="text-sm font-semibold text-[#25191d]">Full Name</label>
                  <div className="relative mt-2">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="register-full-name" name="fullName" value={formData.fullName} onChange={handleChange} autoComplete="name" placeholder="Enter your full name" aria-invalid={Boolean(errors.fullName)} className={`${inputClass("fullName")} pl-11 pr-4`} />
                  </div>
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="register-email" className="text-sm font-semibold text-[#25191d]">Email Address</label>
                  <div className="relative mt-2">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="register-email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="Enter your email" aria-invalid={Boolean(errors.email)} className={`${inputClass("email")} pl-11 pr-4`} />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="register-password" className="text-sm font-semibold text-[#25191d]">Password</label>
                  <div className="relative mt-2">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="register-password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} autoComplete="new-password" placeholder="Create a password" aria-invalid={Boolean(errors.password)} className={`${inputClass("password")} pl-11 pr-12`} />
                    <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-500">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="register-confirm-password" className="text-sm font-semibold text-[#25191d]">Confirm Password</label>
                  <div className="relative mt-2">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="register-confirm-password" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} onChange={handleChange} autoComplete="new-password" placeholder="Confirm your password" aria-invalid={Boolean(errors.confirmPassword)} className={`${inputClass("confirmPassword")} pl-11 pr-12`} />
                    <button type="button" onClick={() => setShowConfirmPassword((visible) => !visible)} aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"} className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-500">
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg">
                  Create Account
                </button>
              </form>

              <Link
                to="/login"
                className="mt-6 inline-flex text-sm font-semibold text-pink-600 transition hover:text-pink-700"
              >
                Already have an account? Log in
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;
