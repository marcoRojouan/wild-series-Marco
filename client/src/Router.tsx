import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CategoryDetail from "./pages/CategoryDetail";
import CategoryEdit from "./pages/CategoryEdit";
import CategoryIndex from "./pages/CategoryIndex";
import CategoryNew from "./pages/CategoryNew";
import ProgramDetail from "./pages/ProgramDetail";
import ProgramEdit from "./pages/ProgramEdit";
import ProgramIndex from "./pages/ProgramIndex";
import ProgramNew from "./pages/ProgramNew";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
      {
        path: "/categories",
        element: <CategoryIndex />,
      },
      {
        path: "/categories/new",
        element: <CategoryNew />,
      },
      {
        path: "/categories/:id",
        element: <CategoryDetail />,
      },
      {
        path: "/categories/:id/edit",
        element: <CategoryEdit />,
      },
    ],
  },
]);
