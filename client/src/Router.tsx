import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ProgramDetail from "./pages/ProgramDetail";
import ProgramEdit from "./pages/ProgramEdit";
import ProgramIndex from "./pages/ProgramIndex";
import ProgramNew from "./pages/ProgramNew";

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
        element: <ProgramIndex />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/programs`),
      },
      {
        path: "/program/new",
        element: <ProgramNew />,
      },
      {
        path: "/program/:id",
        element: <ProgramDetail />,
      },
      {
        path: "/program/:id/edit",
        element: <ProgramEdit />,
      },
    ],
  },
]);
