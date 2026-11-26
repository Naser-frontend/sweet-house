import { Link } from "react-router-dom";

import bakeryImage from "../assets/image/about/logimg.png";

function Register() {
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
                Your registration form will be ready here in the next step.
              </p>

              <div className="mt-8 rounded-2xl border border-dashed border-pink-200 bg-[#fffafc] px-5 py-12 text-center sm:px-8">
                <p className="text-base font-bold text-[#25191d]">
                  Registration form area
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Account details and registration options will be added next.
                </p>
              </div>

              <Link
                to="/"
                className="mt-6 inline-flex text-sm font-semibold text-pink-600 transition hover:text-pink-700"
              >
                Back to Sweet House
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;
