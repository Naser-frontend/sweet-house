import { Clock3, FileText, Mail, MapPin, MessageSquare, Phone, Send, UserRound } from "lucide-react";

import Footer from "../components/Footer";
import contactImage from "../assets/image/about/Strawberry Cake and Cupcake Delight.png";

const contactDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "Herat, Afghanistan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+93 794490787",
    href: "tel:+93794490787",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@sweethouse.com",
    href: "mailto:hello@sweethouse.com",
  },
  {
    icon: Clock3,
    label: "Opening Hours",
    value: "Every Day: 8:00 AM – 9:00 PM",
  },
];

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

        <section className="bg-[#fff9fb] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">We&apos;d Love to Hear from You</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">Contact Information</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">Reach out to Sweet House whenever you need a little help or a little more sweetness.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-500">
                      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-[#25191d]">{detail.label}</h3>
                    <p className="mt-2 break-words text-sm leading-6 text-gray-600">{detail.value}</p>
                  </>
                );

                return detail.href ? (
                  <a key={detail.label} href={detail.href} className="rounded-2xl border border-pink-100 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_12px_28px_rgba(236,72,153,0.12)]">
                    {content}
                  </a>
                ) : (
                  <div key={detail.label} className="rounded-2xl border border-pink-100 bg-white p-5 text-center shadow-sm">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-pink-100 bg-gradient-to-br from-[#fff7fa] via-[#fff0f5] to-[#ffe0ed] p-6 shadow-[0_14px_34px_rgba(236,72,153,0.12)] sm:p-8 lg:p-12">
            <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">Send Us a Message</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">Let&apos;s Talk Sweets</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">Fill out the form and our Sweet House team will be happy to hear from you.</p>
            </div>

            <form onSubmit={(event) => event.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="full-name" className="text-sm font-semibold text-[#25191d]">Full Name</label>
                  <div className="relative mt-2">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="full-name" name="fullName" type="text" autoComplete="name" required placeholder="Your full name" className="w-full rounded-xl border border-pink-100 bg-white/80 py-3 pl-11 pr-4 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email-address" className="text-sm font-semibold text-[#25191d]">Email Address</label>
                  <div className="relative mt-2">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                    <input id="email-address" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="w-full rounded-xl border border-pink-100 bg-white/80 py-3 pl-11 pr-4 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-semibold text-[#25191d]">Subject</label>
                <div className="relative mt-2">
                  <FileText className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} aria-hidden="true" />
                  <input id="subject" name="subject" type="text" required placeholder="How can we help?" className="w-full rounded-xl border border-pink-100 bg-white/80 py-3 pl-11 pr-4 text-sm text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-[#25191d]">Message</label>
                <div className="relative mt-2">
                  <MessageSquare className="pointer-events-none absolute left-4 top-4 text-pink-400" size={18} aria-hidden="true" />
                  <textarea id="message" name="message" rows="6" required placeholder="Tell us a little about your question or sweet idea..." className="w-full resize-y rounded-xl border border-pink-100 bg-white/80 py-3 pl-11 pr-4 text-sm leading-6 text-[#25191d] outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100" />
                </div>
              </div>

              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg sm:w-auto">
                Send Message
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
