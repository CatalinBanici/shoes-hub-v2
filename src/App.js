// REACT ROUTER
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// COMPONENTS
import RootPage from "./pages/root/RootPage";
import HomePage from "./pages/home/HomePage";
import StorePage from "./pages/store/StorePage";
import ProductPage from "./pages/product/ProductPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import CartPage from "./pages/cart/CartPage";
import AboutPage from "./pages/about/AboutPage";
import NotFound from "./pages/not-found/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="store/:id" element={<ProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
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
