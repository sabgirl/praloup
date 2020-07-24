import React from 'react';
import { Card, Image, Grid, Container, Icon } from 'semantic-ui-react';
import './NousConnaitre.css'

const NousConnaitre = () => ( 
    <div className="backgroundnousConnaitre">    
    <Container className="descriptionHaut">
            <p className="pconnaitre">Si nous avons créer cette association, c'est dans le but de pouvoir défendre des droits acquis, savoir entre autre, le maintien de la gare intermédiaire des Molanes dans le futur projet de renouvellement du télésiège.</p>
            <p className="pconnaitre">A l'origine, plusieurs projets étaient en cours, et tous sauf un, préconisaient la suppression de la gare intermédiaire, c'est pourquoi, comme dit le vieil adage, " mieux vaut prévenir que guérir", DEFENSE DES MOLANES est née.</p>
            <p className="pconnaitre">C'est dans cet esprit, que nous avons  créer cette association.</p>
            <p className="pconnaitre">Pour nous défendre et conserver les acquis de chacun.</p>
        </Container>
        <Grid verticalAlign='middle' columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://m.praloup.com/csx/scripts/resizer.php?filename=SECTION/img1/67/67/4p4wqpptgccs&mime=image%2Fjpeg&&originalname=praloup.jpg&geometry=1200x%3E' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.magiclub.com/magiclub/visuals/ski_france_alpes_de_haute_provence_pra_loup_residence_le_hameau_de_praroustan_1.jpg' />
        <br />
        <Image src='https://www.praloup.com/csx/scripts/resizer.php?filename=SECTION/img1/5d/09/h27ccyfy9xg&mime=image%2Fjpeg&&originalname=randonne-ubaye.jpg&geometry=570x%3E' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://www.praloup-vacances.com/wp-content/uploads/2020/01/seolane-pra-loup.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
        <Container className="descriptionBas">
            <h2>Nos actions</h2>
            <div className="actions">
            <Icon name='tree' className="puce"></Icon><p className="pconnaitre"> Nous nous engageons pour le maintien de l'authenticité de notre belle station </p>
            </div>
            <div className="actions">
            <Icon name='tree' className="puce"></Icon><p className="pconnaitre">Nous souhaitons préserver le respect de la nature, conserver nos infrastructures et les exploiter davantage</p>
           </div>
           <div className="actions"> <Icon name='tree' className="puce"></Icon><p className="pconnaitre">Nous voulons développer les loisirs et activités tout au long de l'année</p>
            </div>
            <div className="actions"><Icon name='tree' className="puce"></Icon><p className="pconnaitre">Pour nous, l'écologie fait partie intégrante de nos valeurs</p>
            </div>
        </Container>
        </div>
    )


export default NousConnaitre
