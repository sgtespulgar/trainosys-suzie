import { Route, Routes } from "react-router-dom";
import PagesData from "./PagesData";
import { routerType } from "../models/routerType";
const Router = () => {
  const pageRoutes = PagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;