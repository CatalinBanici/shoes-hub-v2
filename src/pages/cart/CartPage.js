// REACT ROUTER
import { useNavigate } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  modifyCartAmount,
  removeFromCart,
  resetCart,
} from "../../redux/features/slices/cartSlice";

// COMPONENTS
import CartDetails from "./components/cart-details/CartDetails";
import CartList from "./components/cart-list/CartList";
import CartButtons from "./components/cart-buttons/CartButtons";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get cart state from redux
  const cart = useSelector((state) => state.cart.cart);
  const totalProductsAmount = useSelector(
    (state) => state.cart.totalProductsAmount,
  );
  const totalProductsPrice = useSelector(
    (state) => state.cart.totalProductsPrice,
  );
  const totalProductsOldPrice = useSelector(
    (state) => state.cart.totalProductsOldPrice,
  );

  // get discounted products to change the color style for those products with discount
  const discountedProducts = cart.filter((item) => item.discount);

  return (
    <div className="relative top-[64px] min-h-screen max-w-[1024px] sm:top-[80px] lg:m-auto">
      <CartDetails
        totalProductsAmount={totalProductsAmount}
        totalProductsPrice={totalProductsPrice}
        totalProductsOldPrice={totalProductsOldPrice}
        discountedProducts={discountedProducts}
      />

      <CartList
        cart={cart}
        totalProductsAmount={totalProductsAmount}
        modifyCartAmount={modifyCartAmount}
        removeFromCart={removeFromCart}
        dispatch={dispatch}
      />

      <CartButtons
        totalProductsAmount={totalProductsAmount}
        resetCart={resetCart}
        dispatch={dispatch}
        navigate={navigate}
      />
    </div>
  );
}
