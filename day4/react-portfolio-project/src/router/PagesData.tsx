import CalendarComponent from "../components/CalendarComponent/CalendarComponent";
import HomeComponent from "../components/HomeComponent/HomeComponent";
import LandingComponent from "../components/LandingComponent/LandingComponent";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import RegisterComponent from "../components/RegisterComponent/RegisterComponent";
import StatusComponent from "../components/StatusComponent/StatusComponent";
import { routerType } from "../models/routerType";

const PagesData: routerType[] = [
  {
    path: "/",
    element: <LandingComponent />,
    title: "landing"
  },
  {
    path: "/login",
    element: <LoginComponent />,
    title: "login",
  },
  {
    path: "/register",
    element: <RegisterComponent />,
    title: "register",
  },
  {
    path: "/home",
    element: <HomeComponent />,
    title: "home",
  },
  {
    path: "/calendar",
    element: <CalendarComponent />,
    title: "calendar",
  },
  {
    path: "/status",
    element: <StatusComponent />,
    title: "calendar",
  }
];

export default PagesData;