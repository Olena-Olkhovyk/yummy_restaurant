import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Main/Home";
import ItemDetails from "./Components/Items/ItemDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/item/:itemName",
        element: <ItemDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// reportWebVitals();
