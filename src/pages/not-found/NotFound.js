// REACT ROUTER
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative top-[64px] m-10 flex min-h-screen flex-col items-center sm:top-[80px] sm:m-20">
      <h2 className="text-nase m-5 font-medium text-gray-800 sm:m-10 sm:text-xl sm:font-bold">
        PAGE NOT FOUND!
      </h2>
      <p className="text-gray-500">
        Back to the{" "}
        <Link className="text-blue-800 underline" to="/">
          Home Page
        </Link>
      </p>
    </div>
  );
}
