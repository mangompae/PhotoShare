import React from 'react';
import { useParams } from 'react-router-dom';

export default function PhotoDetailPage() {
  const { id } = useParams();

  // Simulación de datos de ejemplo
  const foto = {
    id,
    usuario: 'maria23',
    descripcion: 'Atardecer en la playa',
    url: 'https://via.placeholder.com/600x400',
    comentarios: [
      { usuario: 'carlos_dev', texto: '¡Qué bonito lugar!' },
      { usuario: 'ana', texto: 'Me encanta la foto.' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded shadow p-4">
        <img src={foto.url} alt={foto.descripcion} className="w-full h-80 object-cover rounded mb-4" />
        <p className="text-gray-700 mb-2">@{foto.usuario}</p>
        <p className="text-xl mb-4">{foto.descripcion}</p>
        <h2 className="text-lg font-semibold mb-2">Comentarios</h2>
        <ul className="mb-4">
          {foto.comentarios.map((comentario, idx) => (
            <li key={idx} className="mb-1">
              <span className="font-bold">@{comentario.usuario}</span>: {comentario.texto}
            </li>
          ))}
        </ul>
        <form className="flex gap-2">
          <input className="border px-4 py-2 rounded flex-1" placeholder="Añade un comentario..." />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Comentar</button>
        </form>
      </div>
    </div>
  );
}