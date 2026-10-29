import chocolateCakeImage from "../assets/image/products-image/chocolate-cake-pro.jpg";
import cupcakeImage from "../assets/image/products-image/cupcakes-pro.jpg";
import cookiesImage from "../assets/image/products-image/cookies-pro.jpg";
import candyImage from "../assets/image/products-image/candy-mix-pro.jpg";
import vanillaCakeImage from "../assets/image/products-image/strawberry-cake-pro.jpg";
import brownieImage from "../assets/image/products-image/chocolate-bar-pro.jpg";
import macaronsImage from "../assets/image/products-image/mocorn.jpg";
import chocolateImage from "../assets/image/products-image/darkchocollat.jpg";

const products = [
  { id: "chocolate-cake", name: "Chocolate Cake", category: "Cakes", description: "A rich and delicious chocolate cake made with quality ingredients. Perfect for birthdays, celebrations, and every sweet moment.", price: 15, image: chocolateCakeImage },
  { id: "strawberry-cupcake", name: "Strawberry Cupcake", category: "Cakes", description: "A soft cupcake with fresh strawberry cream.", price: 6, image: cupcakeImage },
  { id: "vanilla-cake", name: "Vanilla Cake", category: "Cakes", description: "Soft vanilla cake with creamy frosting.", price: 13, image: vanillaCakeImage },
  { id: "chocolate-cookies", name: "Chocolate Cookies", category: "Cookies", description: "Fresh cookies with delicious chocolate chips. Crispy outside and soft inside.", price: 8, image: cookiesImage },
  { id: "candy-mix", name: "Candy Mix", category: "Candy", description: "A colorful selection of sweet candies for sharing, gifting, and enjoying.", price: 6, image: candyImage },
  { id: "chocolate-brownie", name: "Chocolate Brownie", category: "Chocolate", description: "Soft and rich chocolate brownie.", price: 4, image: brownieImage },
  { id: "macaron-box", name: "Macaron Box", category: "Cookies", description: "Colorful macarons with delicious flavors.", price: 12, image: macaronsImage },
  { id: "dark-chocolate", name: "Dark Chocolate", category: "Chocolate", description: "Premium dark chocolate for chocolate lovers.", price: 9, image: chocolateImage },
];

export const featuredProductIds = ["chocolate-cake", "strawberry-cupcake", "chocolate-cookies", "candy-mix"];

export default products;
