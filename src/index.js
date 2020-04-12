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
import Admin from './Admin';
import {CookiesProvider} from 'react-cookie';
import RegisterDwelling from './components/RegisterDwelling';
import TermsAndConditions from './components/termsAndConditions';
import ChangePassword from './components/changePassword';
import ForgottenPassword from './components/forgottenPassword';

const routing = (
    <BrowserRouter>
        <CookiesProvider>
            <Route exact path="/" component={Login} />     
            <Route exact path="/Oko" component={App} />
            <Route exact path="/Oko/Settings" component={Settings} />
            <Route exact path="/Oko/Devices" component={Devices} />
            <Route exact path="/Oko/Rooms" component={Rooms} />
            <Route exact path="/Oko/Settings/Admin" component={Admin} />
            <Route exact path="/Oko/Register" component={RegisterDwelling} />
            <Route exact path="/Oko/TermsAndConditions" component={TermsAndConditions} />
            <Route exact path="/Oko/ChangePassword" component={ChangePassword} />
            <Route exact path="/Oko/ForgottenPassword" component={ForgottenPassword} />
        </CookiesProvider>
    </BrowserRouter>
);


ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
