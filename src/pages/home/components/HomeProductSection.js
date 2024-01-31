import React from "react";
import data from "../../../data/data.json";
import ProductCard from "../../store/components/ProductCard";

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
import "./swiperStyles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterById } from "../../../redux/features/slices/productsSlice";

export default function HomeProductSection() {
  const dispatch = useDispatch();

  // getting all the products from the local json file
  const products = data.products.map((products) => products);
  const allProducts = [...products];

  // get latest products added to the json file as 'newArrivals'
  const newArrivals = allProducts.slice(-10);

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
      // the number in the return statement represents the minimum discount percentage of the filtered products
      return discount >= 30;
    },
  );

  // get discounted boots over a certain percentage
  const discountedBoots = allProducts.filter(
    (product) => product.category === "boots" && product.price.discount,
  );
  const discountedBootsOverCertainPercentage = discountedBoots.filter(
    (item) => {
      const discount = Math.abs(
        Math.trunc(
          ((item.price.current - item.price.old) / item.price.old) * 100,
        ),
      );
      // the number in the return statement represents the minimum discount percentage of the filtered products
      return discount >= 40;
    },
  );

  return (
    <div>
      {/* new arrivals */}
      <div>
        <h2 className=" px-5 pt-5 text-xl font-medium text-gray-800 sm:ml-10">
          New Arrivals
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
            1400: {
              spaceBetween: 20,
              slidesPerView: 5,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => null}
          onSwiper={(swiper) => null}
        >
          {newArrivals.map((element) => (
            <SwiperSlide className="my-10" key={element.id}>
              <Link
                to={`store/${element.id}`}
                onClick={() => dispatch(filterById(element.id))}
              >
                <ProductCard product={element} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* sneakers sale */}
      <div>
        <h2 className=" px-5 pt-5 text-xl font-medium text-gray-800 sm:ml-10">
          Sneakers Sale over 30%
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
            1400: {
              spaceBetween: 20,
              slidesPerView: 5,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => null}
          onSwiper={(swiper) => null}
        >
          {discountedSneakersOverCertainPercentage.map((element) => (
            <SwiperSlide className="my-10" key={element.id}>
              <Link
                to={`store/${element.id}`}
                onClick={() => dispatch(filterById(element.id))}
              >
                <ProductCard product={element} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* boots sale */}
      <div>
        <h2 className=" px-5 pt-5 text-xl font-medium text-gray-800 sm:ml-10">
          Winter Sale over 40% on our Boots
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
            1400: {
              spaceBetween: 20,
              slidesPerView: 5,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => null}
          onSwiper={(swiper) => null}
        >
          {discountedBootsOverCertainPercentage.map((element) => (
            <SwiperSlide className="my-10" key={element.id}>
              <Link
                to={`store/${element.id}`}
                onClick={() => dispatch(filterById(element.id))}
              >
                <ProductCard product={element} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
