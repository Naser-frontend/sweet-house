
import {
  Heart,
  CakeSlice,
  Award,
  Truck,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every sweet treat is prepared with care, love, and attention to detail.",
    },
    {
      icon: CakeSlice,
      title: "Fresh Products",
      description:
        "We prepare our sweets with fresh and quality ingredients every day.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We care about the quality, taste, and presentation of every product.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "We deliver your favorite sweets quickly, safely, and fresh.",
    },
  ];

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">
            Why Sweet House
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="text-pink-500">Sweet House?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            We want every order to bring you a delicious and happy experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex h-full flex-col items-center rounded-2xl border border-pink-100 bg-[#fff7f9] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_12px_30px_rgba(236,72,153,0.10)]"
              >
                {/* Real SVG Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-pink-500 shadow-sm transition duration-300 group-hover:scale-110">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="transition-colors duration-300 group-hover:fill-pink-100"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#25191d] transition-colors duration-300 group-hover:text-pink-500">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
