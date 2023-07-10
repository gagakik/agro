import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import Api from './components/Api';
import Cards from './components/Cards';
import Registration from './components/Registration';
import List from './components/List';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
    <Routes>
      <Route element={<App/>} path='/' exact="true"/>
      <Route element={<Api/>} path='/api'/>
      <Route element={<Cards/>} path='/cards'/>
      <Route element={<Registration/>} path='/Registration'/>
      <Route element={<List/>} path='/list'/>
    </Routes>
    </HashRouter>
);

