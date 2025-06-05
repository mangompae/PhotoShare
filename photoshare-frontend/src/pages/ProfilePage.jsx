export default function ProfilePage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Mi perfil</h1>
        <p className="text-gray-700 mb-6">Aquí puedes ver tus datos personales y tus fotos publicadas.</p>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Tus fotos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://via.placeholder.com/600x400" alt="Ejemplo" className="rounded" />
            <img src="https://via.placeholder.com/600x400" alt="Ejemplo" className="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}