import { Link } from "react-router-dom";
import { Fragment } from "react";
import { TYPE_COLOR, COLOR, capitalize } from "../../utils/utils"
import '../../assets/pokedexView.css'
import { Pokemon } from "../../interfaces/Pokemon";

const PokemonCardComponent : React.FC<Pokemon> = ({pokemonData}) =>  {
    const { name, height, id,img, types, color } = pokemonData;

    return(
        <div>
                <b>#{id}  {capitalize(name)}</b>
                    
                <div className="pokemon-image-container"
                    style={{ background: COLOR.LINEAR_GRAD(types[0]) }} >
                    <img src={img} alt="" height="250px"/>
                    
                </div>
                <div className="types">
                    {
                    types.map((name, index) =>( 
                    //types.map(({ type }, index) => (
                    <Fragment key={name}>
                        <small style={{ color: COLOR.TYPE(name) }}> {name} </small>
                        {index !== types.length - 1 && (
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