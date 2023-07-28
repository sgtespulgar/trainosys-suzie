import { Route, Routes } from "react-router-dom";
import { routerType } from "../interfaces/models"
import PagesData from "../pages/PagesData"

const Router = () => {
  const pageRoutes = PagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;