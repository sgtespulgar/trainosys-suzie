import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { TYPE_COLOR, COLOR, capitalize } from "../../utils/utils"
import PokemonCardComponent from "../PokemonCardComponent/PokemonCard";
import { Pokemon, PokemonProps } from "../../interfaces/Pokemon";

const PokemonViewComponent : React.FC<PokemonProps> = ({pokemonData}) => {
 //   const { name, height, id,img, types, color } = pokemonData;
    return(
        <Link to={`/${pokemonData.name}`} state={{name : pokemonData.name}}>
            <div tabIndex={0} className="card" >
            <PokemonCardComponent key={ pokemonData.id } pokemonData={pokemonData} />
            </div>
        </Link>
    )
}

export default PokemonViewComponent;