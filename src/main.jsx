import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import Authentication from "./Firebase/Authentication.jsx";
import Theme from "./Component/Optional/Theme.jsx";

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <Authentication>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </Authentication>
    </Theme>
  </StrictMode>
);
