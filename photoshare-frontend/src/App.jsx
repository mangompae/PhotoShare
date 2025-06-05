import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; // Importa el Layout
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import PublishPhotoPage from './pages/PublishPhotoPage';
import PhotoDetailPage from './pages/PhotoDetailPage';
import MessagesPage from './pages/MessagesPage';
import ConversationPage from './pages/ConversationPage';
import AdminUsersPage from './pages/AdminUsersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/iniciar-sesion" />} />
      <Route path="/iniciar-sesion" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/inicio" element={<HomePage />} />
              <Route path="/perfil" element={<ProfilePage />} />
              <Route path="/perfil/editar" element={<EditProfilePage />} />
              <Route path="/publicar" element={<PublishPhotoPage />} />
              <Route path="/foto/:id" element={<PhotoDetailPage />} />
              <Route path="/mensajes" element={<MessagesPage />} />
              <Route path="/mensajes/:idUsuario" element={<ConversationPage />} />
              <Route path="/admin/usuarios" element={<AdminUsersPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;