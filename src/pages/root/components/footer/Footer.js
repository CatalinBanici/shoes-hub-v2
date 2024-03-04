// REACT ROUTER
import { Link } from "react-router-dom";

// REACT ICONS
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="col-span-4  bg-gray-500 pb-10   text-white  sm:p-20 md:p-8 xl:px-20 2xl:col-span-5">
      <div className="flex flex-col md:flex-row md:justify-between ">
        <section className="my-5">
          <h2 className="m-5">CONTACT</h2>
          <ul className="m-5">
            <li className="flex flex-row items-center">
              <span className="mr-2">
                <BsTelephone />
              </span>{" "}
              +30234789225
            </li>
            <li className="flex flex-row items-center">
              <span className="mr-2">
                <IoMailOutline />
              </span>{" "}
              shoeshub@lorem.com
            </li>
          </ul>
          <ul className="mx-3 flex flex-row">
            <li className="mx-2 text-2xl">
              <Link>
                <AiOutlineFacebook />
              </Link>
            </li>
            <li className="mx-2 text-2xl">
              <Link>
                <AiOutlineInstagram />
              </Link>
            </li>
            <li className="mx-2 text-2xl">
              <Link>
                <FaXTwitter />
              </Link>
            </li>
            <li className="mx-2 text-2xl">
              <Link>
                <AiOutlineYoutube />
              </Link>
            </li>
          </ul>
        </section>

        <nav className="my-5">
          <h2 className="m-5">MENU</h2>
          <ul className="m-5">
            <li className="my-1">
              <Link className=" underline" to="/">
                Home
              </Link>
            </li>
            <li className="my-1">
              <Link className=" underline" to="about">
                About
              </Link>
            </li>
            <li className="my-1">
              <Link className=" underline" to="store">
                Store
              </Link>
            </li>
            <li className="my-1">
              <Link className=" underline" to="cart">
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        <section className="my-5">
          <h2 className="m-5">NEWSLETTER</h2>
          <div className="m-5 flex h-10 flex-row items-center ">
            <input
              className="h-full w-32  rounded-l-md p-2 text-black outline-none sm:w-60 "
              type="text"
              placeholder="Your Email"
            />
            <button className="h-full rounded-r-md bg-amber-500 p-2 text-sm">
              SUBSCRIBE
            </button>
          </div>
        </section>
      </div>
      <aside>
        <p className=" m-5 italic">
          This Website was built for educational purposes only! The data you see
          in it is not real!
        </p>
      </aside>
    </div>
  );
}
