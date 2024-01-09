import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootPage from "./pages/root/RootPage";
import HomePage from "./pages/home/HomePage";
import StorePage from "./pages/store/StorePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route index element={<HomePage />} />
        <Route path="store" element={<StorePage />} />
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
