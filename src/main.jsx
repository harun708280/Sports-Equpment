import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import Authentication from "./Firebase/Authentication.jsx";
import Theme from "./Component/Optional/Theme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <Authentication>
        <RouterProvider router={router}></RouterProvider>
      </Authentication>
    </Theme>
  </StrictMode>
);
