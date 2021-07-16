import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import '../index.css';
import Footer from './Footer';

const App = () =>{
    return(
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={ Home } />                
                <Route exact path='/services' component={ Services } /> 
                <Route  exact path='/about' component={ About } />
                <Route exact path='/contact' component={Contact}/>
            </Switch>

            <Footer />
        </>
    );
}


export default App;