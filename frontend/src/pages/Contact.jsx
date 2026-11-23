import { Mail } from "lucide-react";

import Footer from "../components/Footer";
import contactImage from "../assets/image/about/Strawberry Cake and Cupcake Delight.png";

function Contact() {
  return (
    <div className="bg-white">
      <main>
        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-pink-100 bg-gradient-to-br from-[#fff7fa] via-[#ffeaf2] to-[#ffd1e3] shadow-[0_14px_34px_rgba(236,72,153,0.1)] lg:min-h-[500px] lg:grid-cols-2 lg:items-center lg:rounded-3xl">
            <div className="px-2 py-12 text-center sm:px-8 sm:py-16 lg:px-14 lg:text-left">
              <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-pink-500 lg:justify-start">
                <span className="h-px w-5 bg-pink-500" aria-hidden="true" />
                Contact Us
                <span className="h-px w-5 bg-pink-500" aria-hidden="true" />
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#25191d] sm:text-5xl lg:text-6xl">
                Let&apos;s Get in
                <span className="mt-2 block text-pink-500">Touch</span>
              </h1>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600 sm:text-base lg:mx-0">
                Have a question, a sweet idea, or a special moment to plan? We&apos;d love to hear from you and make your next celebration a little sweeter.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/70 px-5 py-3 text-sm font-semibold text-pink-600 shadow-sm">
                <Mail size={18} aria-hidden="true" />
                We&apos;re happy to help
              </div>
            </div>

            <div className="flex min-h-[280px] items-center justify-center px-5 pb-8 sm:min-h-[360px] sm:px-10 sm:pb-10 lg:min-h-[500px] lg:px-4 lg:pb-0">
              <img
                src={contactImage}
                alt="Strawberry cake and cupcake"
                className="max-h-[310px] w-full object-contain drop-shadow-xl sm:max-h-[390px] lg:max-h-[450px]"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
