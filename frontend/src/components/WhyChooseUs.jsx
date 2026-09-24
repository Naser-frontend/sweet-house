function WhyChooseUs() {
  const features = [
    {
      icon: "🍰",
      title: "Fresh Products",
      description:
        "We prepare our sweets with fresh and quality ingredients every day.",
    },
    {
      icon: "⭐",
      title: "High Quality",
      description:
        "We care about the quality, taste, and presentation of every product.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "We deliver your favorite sweets quickly, safely, and fresh.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
            Why Sweet House
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Why Choose Sweet House?
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            We want every order to bring you a delicious and happy experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-pink-100 bg-pink-50 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm transition duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;