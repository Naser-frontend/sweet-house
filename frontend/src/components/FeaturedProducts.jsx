import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const products = [
    {
      name: "Chocolate Cake",
      description: "Rich and delicious chocolate cake.",
      price: "$15",
    },
    {
      name: "Strawberry Cupcake",
      description: "Soft cupcake with fresh strawberry cream.",
      price: "$6",
    },
    {
      name: "Chocolate Cookies",
      description: "Fresh cookies with delicious chocolate chips.",
      price: "$8",
    },
    {
      name: "Candy Mix",
      description: "A colorful mix of sweet candies.",
      price: "$10",
    },
  ];

  return (
    <section className="bg-pink-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
              Our Favorites
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Featured Products
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Discover some of our most popular sweet treats.
            </p>
          </div>

          <button className="w-fit font-semibold text-pink-500 transition hover:text-pink-600">
            View All Products →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;