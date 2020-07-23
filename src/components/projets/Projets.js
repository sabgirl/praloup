import React from 'react';
import { Card, Image, Grid, Container, Icon } from 'semantic-ui-react';
import './Projets.css';

const Projets = () => (
    <>
    <Container className="presentationProjets">
       
        <p className="layoutPres">Nous travaillons sur des projets d'actualité selon diverses thématiques : loisir et culture, écologie, économie, sécurité,...</p>
        <p className="layoutPres">Notre objectif : toujours veiller à défendre nos intérêts pour vivre au mieux ensemble.</p>
        <p className="layoutPres">Si des projets vous intéressent ou si vous avez des projets qui vous tiennent à coeur, vous pouvez également rejoindre notre association.</p>
    
        </Container>
        
             <Grid container columns={3} className='grid'>
        <Grid.Column className="longlarg">
            <Card className='card'>
                <Image src='https://www.ccvusp.fr/csx/scripts/resizer.php?filename=SECTION/img1/33/56/a5t5l1ncltlp&mime=image%2Fjpeg&&originalname=Colonnes%20de%20tri.jpg&geometry=750x%3E' className="poubelle" wrapped ui={false} />
                <Card.Content>
                    <Card.Header className="titleCard">Le tri-sélectif</Card.Header>
                    <Card.Meta>
                        <span className='thématique'>Ecologie</span>
                    </Card.Meta>
                    <Card.Description className="descriptionCard">
                        Une nouvelle vie pour nos déchets et notre environnement !
      </Card.Description>
                </Card.Content>
                <Card.Content extra className="plus">
                    <a>
                        En savoir plus
      </a>
                </Card.Content>
            </Card>
        </Grid.Column>
        <Grid.Column className="longlarg">

            <Card>
                <Image src='https://static.flickr.com/2079/2134558014_6c85e8a17e.jpg' className="télésiège" />
                <Card.Content>
                    <Card.Header className="titleCard">Télésiège</Card.Header>
                    <Card.Meta>
                        <span className='thématique'>Ecologie</span>
                    </Card.Meta>
                    <Card.Description className="descriptionCard">
                        Utiliser davantage les infrastructures mises en place quelle que soit la saison
      </Card.Description>
                </Card.Content>
                <Card.Content extra className="plus">
                    <a>
                        En savoir plus
      </a>
                </Card.Content>
            </Card>

        </Grid.Column>
        <Grid.Column className="longlarg">
            <Card>
                <Image src='https://static.flickr.com/7442/16236937337_8c0bac189f.jpg' className="ski" />
                <Card.Content>
                    <Card.Header className="titleCard">Ecole de ski</Card.Header>
                    <Card.Meta>
                        <span className='thématique'>Loisirs</span>
                    </Card.Meta>
                    <Card.Description className="descriptionCard">
                        Vers un retour de l'école de ski à Pra Loup 1500 que nous connaissions
      </Card.Description>
                </Card.Content>
                <Card.Content extra className="plus">
                    <a>
                        En savoir plus
      </a>
                </Card.Content>
            </Card>
        </Grid.Column>

    </Grid>
</>
       
    )


export default Projets
