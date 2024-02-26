// OTHER
import data from "../../data/data.json";

// COMPONENTS
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import HomeProductSection from "./components/home-product-section/HomeProductSection";

export default function HomePage() {
  const homePageData = [
    {
      id: 1,
      title: "NEW ARRIVALS",
      text: "New arrivals on all our categories! Check out our latest products!",
      image: "../assets/carousel-gallery/shoes-preview-1.jpg",
    },
    {
      id: 2,
      title: "FREE SHIPPING",
      text: `Free shipping on orders over $${data.misc.minimumPriceFreeShipping}! `,
      image: "../assets/carousel-gallery/shoes-preview-2.jpg",
    },
    {
      id: 3,
      title: `SALE - OVER ${data.misc.minimumSneakersDiscountFilter}% DISCOUNT`,
      text: `Don't miss your chance on our last products SALE over ${data.misc.minimumSneakersDiscountFilter}% off on our Sneakers!`,
      image: "../assets/carousel-gallery/shoes-preview-3.jpg",
    },
    {
      id: 4,
      title: "EVERYTHING YOU NEED",
      text: "Huuuge collection of sneakers, boots, business shoes, high heels, and more with a wide range of styles, colors and sizes!",
      image: "../assets/carousel-gallery/shoes-preview-4.jpg",
    },
    {
      id: 5,
      title: `WINTER SALE - OVER ${data.misc.minimumBootsDiscountFilter}% DISCOUNT!`,
      text: `We got you covered this winter with over ${data.misc.minimumBootsDiscountFilter}% off on our warm and stylish boots!`,
      image: "../assets/carousel-gallery/shoes-preview-5.jpg",
    },
  ];
  return (
    <>
      <div>
        <Carousel homePageData={homePageData} />
        <Categories />
        <HomeProductSection homePageData={homePageData} />
      </div>
    </>
  );
}
