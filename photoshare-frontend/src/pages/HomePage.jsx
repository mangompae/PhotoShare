export default function HomePage() {
  const fotosEjemplo = [
    {
      id: 1,
      usuario: 'maria23',
      descripcion: 'Atardecer en la playa',
      url: 'https://via.placeholder.com/600x400',
    },
    {
      id: 2,
      usuario: 'carlos_dev',
      descripcion: 'Montañas nevadas',
      url: 'https://via.placeholder.com/600x400',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Últimas fotos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fotosEjemplo.map((foto) => (
          <div key={foto.id} className="bg-white rounded shadow overflow-hidden">
            <img src={foto.url} alt={foto.descripcion} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">@{foto.usuario}</p>
              <p className="text-lg">{foto.descripcion}</p>
              <div className="mt-2 flex gap-2">
                <button className="text-blue-500 hover:underline">Ver</button>
                <button className="text-red-500 hover:underline">Me gusta</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
