import React from 'react'
import { Card, Image, Grid, Container, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => (
    <div className = "backgroundhome">
        <Container >
            <p className="philosophie">Ensemble, préservons notre patrimoine</p>
        </Container>

        <Container>
            <p className="projets">Découvrez nos projets actuels<Link to ='/projets'><Icon name ='angle double right' className='fleche'></Icon></Link></p>
            
        </Container>
       
    </div>

)

export default Home
