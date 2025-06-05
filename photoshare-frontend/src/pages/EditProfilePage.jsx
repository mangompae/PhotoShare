export default function EditProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Editar perfil</h1>
        <form className="flex flex-col space-y-4">
          <input className="border px-4 py-2 rounded" placeholder="Nombre" />
          <input className="border px-4 py-2 rounded" placeholder="Apellidos" />
          <input className="border px-4 py-2 rounded" placeholder="Correo electrónico" />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
}