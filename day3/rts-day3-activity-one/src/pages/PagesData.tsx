import HomePage from "../components/HomePageComponent/HomePage";
import PokemonDetailsComponent from "../components/PokemonDetailsComponent/PokemonDetails";
import { routerType } from "../interfaces/models"

const PagesData: routerType[] = [
  {
    path: "/",
    element: <HomePage />,
    title: "home"
  },
  {
    path: ":name",
    element: <PokemonDetailsComponent />,
    title: ":name",
  }
];

export default PagesData;