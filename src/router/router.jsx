import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects/:id", element: <ProjectDetails /> },
  { path: "*", element: <NotFound /> },
]);
