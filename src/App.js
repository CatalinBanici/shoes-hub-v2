import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootPage from "./pages/root/RootPage";
import HomePage from "./pages/home/HomePage";
import StorePage from "./pages/store/StorePage";
import ProductPage from "./pages/product/ProductPage";
import Checkout from "./pages/checkout/Checkout";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalProductsAmount = useSelector(
    (state) => state.cart.totalProductsAmount,
  );
  const totalProductsPrice = useSelector(
    (state) => state.cart.totalProductsPrice,
  );
  console.log("cart", cart);
  console.log("totalProductsAmount", totalProductsAmount);
  console.log("totalProductsPrice", totalProductsPrice);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route index element={<HomePage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="store/:id" element={<ProductPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
