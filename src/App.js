import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import setAuthToken from './api/setAuthToken';
import Navbar from './components/Navbar';

import HomeScreen from './screens/HomeScreen';
import SellScreen from './screens/SellScreen';

export default function App(props) {
    useEffect(() => {
        setAuthToken()
    }, [])
    
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route path='/products/sell' component={SellScreen} />
            </Switch>
        </BrowserRouter>
    );
}