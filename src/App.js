import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import setAuthToken from './api/setAuthToken';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SellScreen from './screens/SellScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/auth/LoginScreen';
import store from './store';
import { loadUser } from './reducers/auth';
import RegisterScreen from './screens/auth/RegisterScreen';
import { loadCart } from './reducers/cart';


export default function App(props) {
    useEffect(() => {
        setAuthToken();
        store.dispatch(loadUser())
        store.dispatch(loadCart())
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/products/sell' component={SellScreen} />
                    <Route path='/products/:id' component={ProductScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/cart' component={CartScreen} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}