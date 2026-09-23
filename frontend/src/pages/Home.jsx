import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection"
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <HeroSection />

      <CategorySection/>

      <FeaturedProducts/>

      <WhyChooseUs/>

      <Footer/>
    </div>
  );
}

export default Home;