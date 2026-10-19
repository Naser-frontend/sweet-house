
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Cakes",
    description: "Delicious cakes for every occasion.",
    image:
      "https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Cookies",
    description: "Fresh and crispy cookies.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Candy",
    description: "Sweet candies for everyone.",
    image:
      "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Chocolate",
    description: "Rich and delicious chocolates.",
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=700&q=80",
  },
];

function CategorySection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
            Our Categories
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Our Sweet Collection
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover delicious treats made to make every moment a little sweeter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="group overflow-hidden rounded-2xl border border-pink-100 bg-pink-50 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
            >
              <div className="h-52 overflow-hidden bg-pink-100 sm:h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-5 py-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-pink-600">
                  {category.name}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>

                <span className="mt-3 inline-block font-semibold text-pink-500">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;