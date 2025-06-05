import React from 'react';

export default function PublishPhotoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Publicar foto</h1>
        <form className="flex flex-col space-y-4">
          <input className="border px-4 py-2 rounded" type="text" placeholder="Descripción de la foto" />
          <input className="border px-4 py-2 rounded" type="url" placeholder="URL de la imagen" />
          <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Publicar</button>
        </form>
      </div>
    </div>
  );
}