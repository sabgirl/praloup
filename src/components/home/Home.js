import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Home = () => (
   
    <Card color='red'>
        <Image src='https://www.ccvusp.fr/csx/scripts/resizer.php?filename=SECTION/img1/33/56/a5t5l1ncltlp&mime=image%2Fjpeg&&originalname=Colonnes%20de%20tri.jpg&geometry=750x%3E' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Le tri-sélectif</Card.Header>
            <Card.Meta>
                <span className='thématique'>Ecologie</span>
            </Card.Meta>
            <Card.Description>
                Une nouvelle vie pour nos déchets et notre environnement !
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
        En savoir plus
      </a>
        </Card.Content>
    </Card>

    
    
)

export default Home
