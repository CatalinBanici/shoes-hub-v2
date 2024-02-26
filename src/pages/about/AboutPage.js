// REACT
import { useEffect } from "react";

// REACT ICONS
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

// AOS
import aos from "aos";
import "aos/dist/aos.css";

// IMAGES
import Image1 from "../../assets/images/about-section/image-1.jpg";
import Image2 from "../../assets/images/about-section/image-2.jpg";
import Image3 from "../../assets/images/about-section/image-3.jpg";
import Image4 from "../../assets/images/about-section/image-4.jpg";

export default function AboutPage() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className="relative top-[64px] sm:top-[80px]">
      <div className="m-3 rounded-md bg-white p-3 text-gray-800 sm:m-5 sm:p-5">
        <h2 className="m-3 my-20 text-2xl font-bold sm:m-5 lg:mx-32 lg:my-10 xl:m-32 xl:text-3xl">
          ABOUT US
        </h2>

        <div className="my-20 xl:mx-32">
          <h2
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="m-3 text-xl sm:m-5 lg:mx-32 lg:my-10 xl:text-2xl"
          >
            Welcome to <strong>ShoesHUB</strong>,
          </h2>
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="600"
            className="m-3 text-sm sm:m-5 sm:text-base lg:mx-32 lg:my-10 xl:text-xl"
          >
            where footwear meets style, comfort, and quality. At{" "}
            <strong>ShoesHUB</strong>, we're passionate about providing you with
            the perfect pair of shoes for every occasion, whether it's hitting
            the streets in trendy <em>sneakers</em> , striding confidently in{" "}
            <em>business shoes</em>, or stepping out in glamorous{" "}
            <em>high heels</em>.
          </p>
        </div>

        <div className="relative my-20 flex flex-col justify-center md:items-start xl:mx-32 xl:flex-row">
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1000"
            src={Image1}
            alt="shoes"
          />
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-offset="200"
            className=" absolute m-3  self-end bg-black bg-opacity-50 p-3 text-sm text-white sm:m-5 sm:text-base md:w-[70%] xl:relative xl:self-center xl:bg-white xl:bg-opacity-100 xl:text-xl xl:text-gray-800"
          >
            Our mission is simple: to offer a diverse selection of footwear that
            reflects the latest fashion trends while ensuring durability,
            comfort, and affordability. We understand that shoes are more than
            just accessories; they're an expression of your personality and
            style.
          </p>
        </div>

        <div className="relative my-20 flex flex-col justify-center md:items-end xl:mx-32 xl:flex-row-reverse ">
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
            src={Image2}
            alt="shoes"
          />
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
            className="absolute  m-3 self-start bg-black bg-opacity-50 p-3 text-sm text-white sm:m-5 sm:text-base md:w-[70%] xl:relative xl:self-center xl:bg-white xl:bg-opacity-100 xl:text-xl xl:text-gray-800 "
          >
            With a curated collection of <em>sneakers</em>, <em>boots</em>,{" "}
            <em>business shoes</em>, <em>high heels</em>, and more, we cater to
            every taste and preference. From casual streetwear to formal
            occasions, we've got you covered with our wide range of{" "}
            <em>colors</em>, and <em>sizes</em>.
          </p>
        </div>

        <div className="my-20 xl:mx-32 ">
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
            className="m-auto"
            src={Image3}
            alt="shoes"
          />
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
            className="m-3 text-sm sm:m-5 sm:text-base lg:mx-32 lg:my-10 xl:text-xl"
          >
            What sets us apart is our commitment to quality craftsmanship and
            attention to detail. We source our shoes from reputable
            manufacturers who share our dedication to excellence, ensuring that
            each pair meets our stringent standards of comfort, durability, and
            style.
          </p>
        </div>

        <div className="my-20 xl:mx-32">
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
            className="m-auto"
            src={Image4}
            alt="shoes"
          />
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
            className="m-3 text-sm sm:m-5 sm:text-base lg:mx-32 lg:my-10 xl:text-xl"
          >
            At <strong>ShoesHUB</strong>, customer satisfaction is our top
            priority. Our friendly and knowledgeable team is here to assist you
            every step of the way, from browsing our collection to finding the
            perfect fit. We strive to provide an exceptional shopping
            experience, backed by prompt shipping and hassle-free returns.
          </p>
        </div>

        <div className="my-20 xl:mx-32">
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="400"
            className="m-3 text-sm sm:m-5 sm:text-base lg:mx-32 lg:my-10 xl:text-xl"
          >
            Thank you for choosing <strong>ShoesHUB</strong> as your destination
            for footwear essentials. Step into style and comfort with us today!
          </p>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="800"
            className="m-3 sm:m-5 lg:mx-32 lg:my-10"
          >
            <h4 className="my-2 text-lg font-bold text-amber-500 xl:text-2xl">
              CONTACT US
            </h4>
            <p className="flex flex-row items-center xl:text-xl">
              <span className="mr-2 text-xl text-amber-500">
                <BsTelephone />
              </span>
              +30234789225
            </p>
            <p className="flex flex-row items-center xl:text-xl">
              <span className="mr-2 text-xl text-amber-500">
                <IoMailOutline />
              </span>
              shoeshub@lorem.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
