function CategorySection() {
  const categories = [
    {
      name: "Cakes",
      description: "Delicious cakes for every occasion.",
      icon: "🍰",
    },
    {
      name: "Cookies",
      description: "Fresh and crispy cookies.",
      icon: "🍪",
    },
    {
      name: "Candy",
      description: "Sweet candies for everyone.",
      icon: "🍬",
    },
    {
      name: "Chocolate",
      description: "Rich and delicious chocolates.",
      icon: "🍫",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
            Our Categories
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Our Sweet Collection
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Discover delicious treats made to make every moment a little
            sweeter.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group rounded-3xl border border-pink-100 bg-pink-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Temporary Icon */}
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm transition duration-300 group-hover:scale-110">
                {category.icon}
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-bold text-gray-900">
                {category.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {category.description}
              </p>

              {/* Link */}
              <button className="mt-5 font-semibold text-pink-500 transition hover:text-pink-600">
                Explore →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;