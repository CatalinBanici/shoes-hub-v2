// REACT
import React, { useEffect } from "react";

// REACT ROUTER
import { Link } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { filterById } from "../../../../../redux/features/slices/productsSlice";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../swiperStyles.css";

// AOS
import aos from "aos";
import "aos/dist/aos.css";

// OTHER
import data from "../../../../../data/data.json";

// COMPONENTS
import ProductCard from "../../../../store/components/ProductCard";

export default function SaleSneakers({ homePageData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    aos.init();
  }, []);

  // get all the products from the local json file
  const products = data.products.map((products) => products);
  const allProducts = [...products];

  // get discounted sneakers over a certain percentage
  const discountedSneakers = allProducts.filter(
    (product) => product.category === "sneakers" && product.price.discount,
  );
  const discountedSneakersOverCertainPercentage = discountedSneakers.filter(
    (item) => {
      const discount = Math.abs(
        Math.trunc(
          ((item.price.current - item.price.old) / item.price.old) * 100,
        ),
      );
      return discount >= data.misc.minimumSneakersDiscountFilter;
    },
  );

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200"
      data-aos-offset="300"
    >
      <h2 className=" px-5 pt-5 text-xl font-medium text-gray-800 sm:ml-10">
        {homePageData[2].title}:
      </h2>
      <Swiper
        className="h-full"
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          540: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          830: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => null}
        onSwiper={(swiper) => null}
      >
        {discountedSneakersOverCertainPercentage.map((element) => (
          <SwiperSlide className="my-10" key={element.id}>
            <Link
              to={`store/${element.id}`}
              onClick={() => {
                dispatch(filterById(element.id));
              }}
            >
              <ProductCard product={element} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
