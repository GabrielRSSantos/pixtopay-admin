import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../features/login/components/Login';
import Header from '../features/header/components/Header';
import Manager from '../features/manager/components/Manager';
import { Editores } from '../features/editores';
import CriarUser from '../features/criaruser/components/CriarUser';

const AppRoutes = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/manager" element={<Manager />} />
      <Route path="/editores" element={<Editores />} />
      <Route path="/criarusuario" element={<CriarUser />} />
    </Routes>
  </Router>
);

export default AppRoutes;
