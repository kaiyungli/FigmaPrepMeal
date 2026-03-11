import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import MealPlanner from "./components/MealPlanner";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetail />,
  },
  {
    path: "/planner",
    element: <MealPlanner />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
