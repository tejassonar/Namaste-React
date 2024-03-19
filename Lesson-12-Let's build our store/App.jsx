import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import Grocery from "./components/Grocery";
import Error from "./src/components/Error";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Cart from "./src/components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./src/utils/Context/UserContext";
import { Provider } from "react-redux";
import { store } from "./src/utils/store/store";

const AppLayout = () => {
  const [isLoggedIn, seIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Dummy");

  return (
    <UserContext.Provider
      value={{ isLoggedIn, seIsLoggedIn, userName, setUserName }}
    >
      <Provider store={store}>
        <div className="app">
          <Header />
          <div className="flex justify-center items-center">
            <Outlet />
          </div>
        </div>
      </Provider>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));
const AboutUs = lazy(() => import("./src/components/AboutUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
