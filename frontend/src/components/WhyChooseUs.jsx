import { Award, Leaf, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Products",
    description: "We prepare our sweets with fresh and quality ingredients.",
  },
  {
    icon: Award,
    title: "High Quality",
    description: "We care about the quality and taste of every product.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "We deliver your orders quickly and safely.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#fff8fa] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#25191d] sm:text-4xl">
            Why Choose <span className="text-pink-500">Sweet House?</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            We care about your happiness and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center px-4 text-center sm:px-8 lg:px-12 ${
                  index > 0
                    ? "border-t border-pink-200 pt-8 sm:border-l sm:border-t-0 sm:pt-0"
                    : ""
                }`}
              >
                <Icon
                  size={44}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="text-pink-500"
                />
                <h3 className="mt-5 text-lg font-bold text-[#25191d] sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
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
