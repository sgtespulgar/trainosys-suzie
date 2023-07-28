import { Fragment } from "react";
import { COLOR, capitalize } from "../../utils/utils"
import '../../assets/pokedexView.css'
import { PokemonProps } from "../../interfaces/Pokemon";

const PokemonCardComponent : React.FC<PokemonProps> = (props : PokemonProps) =>  {
   // const { name, height, id,img, types, color } = pokemonData;

   console.log(JSON.stringify(props))
    return(
        <div>
                <b>#{props.pokemonData.id}  {capitalize(props.pokemonData.name)}</b>
                    
                <div className="pokemon-image-container"
                    style={{ background: COLOR.LINEAR_GRAD(props.pokemonData.types[0]) }} 
                    >
                    <img src={props.pokemonData.img} alt="" height="250px"/>
                    
                </div>
                <div className="types">
                    {
                    props.pokemonData.types.map((name, index) =>( 
                    //types.map(({ type }, index) => (
                    <Fragment key={name}>
                        <small style={{ color: COLOR.TYPE(name) }}> {name} </small>
                        {index !== props.pokemonData.types.length - 1 && (
                        <span style={{ color: "#000" }} key={`separator-${name}`}>
                            {" | "}
                        </span>
                        )}
                    </Fragment>
                    ))
                }
                </div>
            </div>
    )
}

export default PokemonCardComponent;