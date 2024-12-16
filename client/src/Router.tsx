import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Program from "./pages/program";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/program",
        element: <Program />,
        loader: () => fetch("http://localhost:3310/api/programs"),
      },
    ],
  },
]);
