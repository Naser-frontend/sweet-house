
import { Link } from "react-router-dom";
import cakesImage from "../assets/image/catagory-img/cakes.jpg";
import cookiesImage from "../assets/image/catagory-img/cookies.jpg";
import candyImage from "../assets/image/catagory-img/candy.jpg";
import chocolateImage from "../assets/image/catagory-img/chocolat.jpg";

const categories = [
  {
    name: "Cakes",
    description: "Delicious cakes for every occasion.",
    image: cakesImage,
  },
  {
    name: "Cookies",
    description: "Fresh and crispy cookies.",
    image: cookiesImage,
  },
  {
    name: "Candy",
    description: "Sweet candies for everyone.",
    image: candyImage,
  },
  {
    name: "Chocolate",
    description: "Rich and delicious chocolates.",
    image: chocolateImage,
  },
];

function CategorySection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-sm">
            Our Categories
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#25191d] sm:text-4xl lg:text-5xl">
            Explore Our{" "}
            <span className="text-pink-500">Sweet Collection</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Discover delicious treats made to make every moment a little
            sweeter.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="group overflow-hidden rounded-xl border border-pink-100/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_12px_30px_rgba(236,72,153,0.12)]"
            >
              {/* Rectangular Image */}
              <div className="relative h-56 overflow-hidden bg-pink-50 sm:h-48 lg:h-44 xl:h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70" />
              </div>

              {/* Card Content */}
              <div className="px-4 py-5 text-center sm:px-5">
                <h3 className="text-lg font-bold text-[#25191d] transition-colors duration-300 group-hover:text-pink-500 sm:text-xl">
                  {category.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-pink-500">
                  Explore
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
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
