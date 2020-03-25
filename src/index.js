import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Settings from './Settings';
import Login from './components/login';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from 'react-router-dom';
import Devices from './roomdevices';
import Rooms from './rooms';
import {CookiesProvider} from 'react-cookie';

const routing = (
    <BrowserRouter>
        <CookiesProvider>
            <Route exact path="/" component={Login} />     
            <Route exact path="/Oko" component={App} />
            <Route exact path="/Oko/Settings" component={Settings} />
            <Route exact path="/Oko/Devices" component={Devices} />
            <Route exact path="/Oko/Rooms" component={Rooms} />
        </CookiesProvider>
    </BrowserRouter>
);


ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
