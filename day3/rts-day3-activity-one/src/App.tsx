import {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Pokemon from './intefaces/Pokemon'
import {Routes, Route, NavLink, Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProfilePage from './components/ProfilePage/ProfilePage'



function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function  fetchPokemonData(){
      try{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30");
        const result = response.data.results;
        const fetchPokemonList : Pokemon[] = await Promise.all(
          result.map(async (pokemon : {url : string}) => {
            const pokemonDatResponse = await axios.get(pokemon.url);

            return {
              name: pokemonDatResponse.data.name,
              height: pokemonDatResponse.data.height,
              id: pokemonDatResponse.data.id,
              img: pokemonDatResponse.data.sprites.other.dream_world.front_default,
              types: pokemonDatResponse.data.types.map(
                (type: {type : {name: string}}) => type.type.name
              ),
            };
          })
        );
        setPokemonList(fetchPokemonList);
      } catch (error){
        console.error("Error fetching pokemon data: ", error)
      }
    }
    fetchPokemonData();
  },[])

  return (
    <>
      <section>
        <Container fluid>
          <Row> {
              pokemonList.map((pokemon) => 
              <Col xs={6} md={4} lg={3}>
                <Link to={pokemon.name} state={pokemon.name} >
                  <ProfilePage />
                  <Card style={{ width: '18rem' }}>
                    <Card.Header>
                      <Card.Title>
                        <div>{pokemon.name}</div>
                        <div>{pokemon.id}</div>
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Card.Img variant="top" src={pokemon.img} />
                      <Card.Text>
                        <div>
                          description here
                        </div>
                        <div>
                          Height: {pokemon.height}
                        </div>
                        <div>
                          Weight: {pokemon.id}
                        </div> 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                
              </Col>
              )
            }
            
          </Row>
        </Container>
      </section>
    </>
  )
}

export default App
