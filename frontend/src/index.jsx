import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Posts from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
  <GlobalStyle/>
  <Header/>
    <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/connexion" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
)
