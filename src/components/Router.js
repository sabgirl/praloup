import React from 'react'
import Footer from './footer/Footer'
import Home from './home/Home'
import LiensUtiles from './liensUtiles/LiensUtiles'
import Navbar from './navbar/Navbar'
import NousConnaitre from './nousConnaitre/NousConnaitre'
import NousRejoindre from './nousRejoindre/NousRejoindre'
import {BrowserRouter as Switch, Route} from 'react-router-dom';

function Router() {
    return (

        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/nousconnaitre' component={NousConnaitre} />
                <Route path='/liensutiles' component={LiensUtiles} />
                <Route path='/nousrejoindre' component={NousRejoindre} />
             </Switch>
            <Footer />
        </div>
        
    )
}

export default Router
