import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../features/login/components/Login';
import Header from '../features/header/components/Header';
import Manager from '../features/manager/components/Manager';
import Blog from '../features/blog/components/Blog';
import { Editores } from '../features/editores';
import CriarUser from '../features/criaruser/components/CriarUser';
import BlogPage from '../features/blogpage/BlogPage/BlogPage';
import EditUser from '../features/criaruser/components/EditUser';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manager" element={<ProtectedRoute element={Manager} />} />
        <Route path="/editores" element={<ProtectedRoute element={Editores} />} />
        <Route path="/criarusuario" element={<ProtectedRoute element={CriarUser} />} />
        <Route path="/editarblogs" element={<ProtectedRoute element={Blog} />} />
        <Route path="/blogpage" element={<ProtectedRoute element={BlogPage} />} />
        <Route path="/edituser/:id" element={<ProtectedRoute element={EditUser} />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default AppRoutes;
