// REACT
import { useState } from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiperStyles.css";

export default function ProductGallery({ product }) {
  const productImages = product[0].gallery.images.map((image) => image);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // image magnifier logic
  const [showImgMagnifier, setShowImgMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const magnifierHeight = 300;
  const magnifieWidth = 300;
  const zoomLevel = 2;

  return (
    <div className=" relative w-full max-w-[600px] self-center justify-self-center lg:m-5 lg:self-start">
      {/* product image */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index} className=" overflow-hidden">
            <img
              className=" relative w-full cursor-zoom-in"
              src={image}
              alt="shoes images"
              onMouseEnter={(e) => {
                // update image size and turn-on magnifier
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setSize([width, height]);
                setShowImgMagnifier(true);
              }}
              onMouseMove={(e) => {
                // update cursor position
                const element = e.currentTarget;
                const { top, left } = element.getBoundingClientRect();

                // calculate cursor position on the image
                const x = e.pageX - left - window.pageXOffset;
                const y = e.pageY - top - window.pageYOffset;
                setXY([x, y]);
              }}
              onMouseLeave={() => setShowImgMagnifier(false)}
            />

            {/* magnifier */}
            <div
              style={{
                display: showImgMagnifier ? "" : "none",
                position: "absolute",

                // prevent magnifier blocks the mousemove event of img
                pointerEvents: "none",
                // set size of magnifier
                height: `${magnifierHeight}px`,
                width: `${magnifieWidth}px`,
                // move element center to cursor pos
                top: `${y - magnifierHeight / 2}px`,
                left: `${x - magnifieWidth / 2}px`,
                opacity: "1", // reduce opacity so you can verify position
                border: "1px solid lightgray",
                borderRadius: "50%",
                backgroundColor: "white",
                backgroundImage: `url('${image}')`,
                backgroundRepeat: "no-repeat",

                //calculate zoomed image size
                backgroundSize: `${imgWidth * zoomLevel}px ${
                  imgHeight * zoomLevel
                }px`,

                //calculate position of zoomed image.
                backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                backgroundPositionY: `${
                  -y * zoomLevel + magnifierHeight / 2
                }px`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* product thumbs */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
        className="mySwiper"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="shoes images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
