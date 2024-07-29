import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./features/home/Home.tsx";
import User from "./pages/User.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
