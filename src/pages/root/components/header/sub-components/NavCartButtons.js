// REACT ROUTER
import { useNavigate } from "react-router-dom";

// REACT ICONS
import { TbShoppingBag } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function NavCartButtons(props) {
  const { totalProductsAmount, showNavbar, setShowNavbar } = props;

  const navigate = useNavigate();

  return (
    <div className="m-4 flex flex-row items-center justify-center sm:m-6 ">
      {/* shopping bag */}
      <div className=" mx-3 text-2xl text-gray-800">
        <button
          className="relative lg:transition lg:delay-75 lg:ease-out lg:hover:scale-110 lg:hover:text-gray-600"
          aria-label="Shopping Cart"
          title="Shopping Cart"
          onClick={() => navigate("cart")}
        >
          <TbShoppingBag />
          {totalProductsAmount > 0 && (
            <span className=" absolute bottom-[-7px] right-[-7px]  h-[1.15rem] w-[1.15rem] rounded-full bg-amber-500  text-sm text-white">
              {totalProductsAmount}
            </span>
          )}
        </button>
      </div>

      {/* mobile nav button */}
      <div className=" mx-3 text-2xl text-gray-800 sm:hidden">
        <button onClick={() => setShowNavbar(!showNavbar)}>
          {showNavbar ? (
            <AiOutlineClose aria-label="Close Menu" title="Close Menu" />
          ) : (
            <AiOutlineMenu aria-label="Open Menu" title="Open Menu" />
          )}
        </button>
      </div>
    </div>
  );
}
