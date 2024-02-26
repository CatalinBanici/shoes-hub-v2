// REACT ROUTER
import { useNavigate } from "react-router-dom";

// IMAGES
import SuccessImg from "../../../../assets/images/other/success-green-check-mark-icon.webp";

export default function Complete() {
  const navigate = useNavigate();

  return (
    <div className="m-3 min-h-screen sm:m-5">
      <div className="m-5 flex items-center justify-center sm:m-7">
        <img
          className=" h-32 w-32 sm:h-40 sm:w-40"
          src={SuccessImg}
          alt="Success!"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="m-3 text-2xl font-bold text-gray-800 sm:m-5 sm:text-3xl">
          Thank you!
        </h3>
        <h4 className="m-3 text-lg font-medium text-gray-600 sm:m-5 sm:text-xl ">
          Your order has been placed!
        </h4>
      </div>
      <div className="flex justify-center">
        <button
          className="m-3 rounded-md bg-amber-500 px-10 py-2 text-lg text-white sm:m-5 sm:px-20 sm:py-4 sm:text-xl lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
