import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            {
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Login' element={<Login />} />
                    <Route exact path='/RecoveryPassword' element={<RecoveryPassword />} />
                    <Route exact path='/send-email' component={<SendEmail />} />
					<Route exact path='/new-password' component={<NewPassword />} />
					<Route exact path='/account' component={<MyAccount />} />
					<Route exact path='/signup' component={<CreateAccount />} />
					<Route exact path='/checkout' component={<Checkout />} />
					<Route exact path='/orders' component={<Orders />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            }
        </BrowserRouter>
    );
}

export default App;