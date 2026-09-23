import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section>
      <h2>Featured Products</h2>

      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default FeaturedProducts;