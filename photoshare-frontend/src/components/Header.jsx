import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link to="/inicio" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          📸 PhotoShare
        </Link>
        <nav className="flex gap-4 items-center">
          <NavLink
            to="/inicio"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-blue-50 font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/publicar"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-blue-50 font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`
            }
          >
            Publicar
          </NavLink>
          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-blue-50 font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`
            }
          >
            Perfil
          </NavLink>
          <NavLink
            to="/mensajes"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-blue-50 font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`
            }
          >
            Mensajes
          </NavLink>
          <NavLink
            to="/admin/usuarios"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-blue-50 font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`
            }
          >
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  );
}