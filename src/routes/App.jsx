import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            {
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Login' element={<Login />} />
                    <Route exact path='/RecoveryPassword' element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            }
        </BrowserRouter>
    );
}

export default App;