// REACT ROUTER
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="m-4  sm:m-6" to="/">
      <span className=" text-xl font-bold text-gray-800">Shoes</span>
      <span className="ml-1 rounded-md bg-amber-500 p-2 text-xl font-bold text-white">
        HUB
      </span>
    </Link>
  );
}
