import React from "react";
import { Link } from "react-router-dom";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCard";
import { PokemonProps } from "../../interfaces/Pokemon";


const PokemonViewComponent : React.FC<PokemonProps> = (props : PokemonProps) => {
 //   const { name, height, id,img, types, color } = pokemonData;
    return(
        <Link to={`/${props.pokemonData.name}`} state={{name : props.pokemonData.name}}>
            <div tabIndex={0} className="card" >
            <PokemonCardComponent key={ props.pokemonData.id } pokemonData={props.pokemonData} />
            </div>
        </Link>
    )
}

export default PokemonViewComponent;