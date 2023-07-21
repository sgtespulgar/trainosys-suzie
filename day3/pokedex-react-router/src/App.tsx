import './App.css'
import AboutPage from './components/About/AboutPage'
import HomePage from './components/Home/HomePage'
import ProfilePage from './components/Profile/ProfilePage'
import RootPage from './components/RootPage/RootPage'
import {Routes, Route} from "react-router-dom"
import axios from 'axios'
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


interface Pokemon {
    name: string;
    height: number;
    id: number;
    img: string;
    types: string[];
}

const App : React.FC = () =>{
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

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
      <Routes>
        <Route path='/' element={ <RootPage />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    <section>
    <Container fluid>
      <Row> {
          pokemonList.map((pokemon) => 
          <Col xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pokemon.img} />
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                  {pokemon.height} -
                  {pokemon.id}
                </Card.Text>
              </Card.Body>
            </Card>
            
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
