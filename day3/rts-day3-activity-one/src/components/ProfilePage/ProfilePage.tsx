import { Button } from 'react-bootstrap';
import Pokemon from '../../intefaces/Pokemon'
import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ProfilePage: React.FC = () =>{
    const [pokemon, setPokemon] = useState<Pokemon>();

    return(
        <>
            Hello!
            {/* <Container fluid>
                <Link to={"/"}><Button >Back</Button></Link>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pokemonProps.img} />
                    <Card.Body>
                      <Card.Title>{pokemonProps.name}</Card.Title>
                      <Card.Text>
                        {pokemonProps.height} -
                        {pokemonProps.id}
                      </Card.Text>
                    </Card.Body>
                  </Card>
            </Container> */}
        </>
    )
}

export default ProfilePage;