import {useState, useEffect, createContext  } from 'react'
import axios from 'axios'
import {fetchPokemons} from '../../api/index'
import { Pokemon } from '../../interfaces/Pokemon'
import { SpinnerComponent } from '../Spinner/SpinnerComponent';
import '../../assets/pokedexView.css'
import PokemonViewComponent from '../PokemonViewComponent/PokemonView';

const HomePageComponent : React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    let [loadingInProgress, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemonData(){
            try{
              const response = await fetchPokemons();
              const result = response.data.results;
              const fetchPokemonList : Pokemon[] = await Promise.all(
                result.map(async (pokemon : {url : string}) => {
                  const pokemonDatResponse = await axios.get(pokemon.url);
                  const pokemonColor = await axios.get(pokemonDatResponse.data.species.url);
                  
                  return {
                    name: pokemonDatResponse.data.name,
                    height: pokemonDatResponse.data.height,
                    weight: pokemonDatResponse.data.weight,
                    id: pokemonDatResponse.data.id,
                    img: pokemonDatResponse.data.sprites.other.dream_world.front_default,
                    types: pokemonDatResponse.data.types.map(
                      (type: {name: string}) => type.type.name 
                    ),
                    color : pokemonColor.data.color.name
                  };
                })
              );
              setLoading(false)
              setPokemonList(fetchPokemonList);
            } catch (error){
              console.error("Error fetching pokemon data: ", error)
            }
        }
        fetchPokemonData();
    },[pokemonList]);
    
    return(
        <div className="container-fluid">
            {loadingInProgress ?
                <div className="loader-container">
                    <div className="spinner">
                        <SpinnerComponent />
                    </div>
                </div>
            : 
                <div className="card" >
                    <div className="card-header pb-0">
                        <h3 className='py-3 mx-2'>Pokedex</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="card-list">
                                {
                                    pokemonList.map( ( pokemonData : Pokemon ) => {
                                        return (
                                            <PokemonViewComponent key={ pokemonData.id } pokemonData={pokemonData} />
                                        );
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            
        
    </div>
    )
}

export default HomePageComponent;