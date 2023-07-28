import {useState, useEffect, Fragment} from 'react'
import { useLocation } from "react-router-dom";
import { COLOR } from "../../utils/utils"
import { Pokemon, PokemonProps } from '../../interfaces/Pokemon'

import axios from 'axios'
import './PokemonDetails.css'
import { SpinnerComponent } from "../Spinner/SpinnerComponent";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCard";

const PokemonDetailsComponent : React.FC = () =>  {
    const location = useLocation();
    const { name } = location.state;

    const [pokemon, setPokemon] = useState<Pokemon>({});
    let [loadingInProgress, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchPokemonDetails(){
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                const result = response.data;
                const pokemonDescription = await axios.get(result.species.url);
                
                let _poke : Pokemon = {
                    id: result.id,
                    name : result.name,
                    height : result.height,
                    weight : result.weight,
                    types: result.types.map(
                        (type: {name: string}) => type.type.name
                    ),
                    img : result.sprites.other.dream_world.front_default,
                    color : pokemonDescription.data.color.name,
                    description : pokemonDescription.data.flavor_text_entries[0].flavor_text
                }
               
                setPokemon(_poke)
                setLoading(false)
            } catch (error){
              console.error("Error fetching pokemon data: ", error)
            }
        }
        fetchPokemonDetails();
    },[]);

    return(
        <div className="container-fluid">
            {loadingInProgress ?
                <div className="loader-container">
                    <div className="spinner"><SpinnerComponent/></div>
                </div>
            : 
                <div className="card">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-md-4" style={{ background: COLOR.LINEAR_GRAD(pokemon.types[0]) }} >
                                <PokemonCardComponent key={ pokemon.id } pokemonData={pokemon}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="row g-0">
                                        <h5 className="card-title">Bio</h5>
                                        <p className="card-text">{pokemon.description}</p>
                                    </div>
                                    <div className="row g-0">
                                    <div className="species-col">
                                        <p className="title">Species</p>
                                            <div className="row">
                                                <div className="category-cell">Genus:</div>
                                                <div className="value-cell">{}</div>
                                            </div>
                                            <div className="row">
                                                <div className="category-cell">Height:</div>
                                                <div className="value-cell">{pokemon.height}</div>
                                            </div>
                                            <div className="row">
                                                <div className="category-cell">Weight:</div>
                                                <div className="value-cell">{pokemon.weight}</div>
                                            </div>
                                            <div className="row">
                                                <div className="category-cell">Gen:</div>
                                                <div className="value-cell">{}</div>
                                            </div>
                                            <div className="row">
                                                <div className="category-cell">Habitat:</div>
                                                <div className="value-cell">{}</div>
                                            </div>
                                            <div className="row">
                                                <div className="category-cell">Shape:</div>
                                                <div className="value-cell">{}</div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            
        </div>
    )
}

export default PokemonDetailsComponent;