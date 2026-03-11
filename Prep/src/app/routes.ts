import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import MealPlanner from "./components/MealPlanner";
import NotFound from "./components/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/recipe/:id",
    Component: RecipeDetail,
  },
  {
    path: "/planner",
    Component: MealPlanner,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

export const router = createBrowserRouter(routes);
