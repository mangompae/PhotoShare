export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Registro</h1>
        <form className="flex flex-col space-y-4">
          <input className="border px-4 py-2 rounded" placeholder="Nombre" />
          <input className="border px-4 py-2 rounded" placeholder="Apellidos" />
          <input className="border px-4 py-2 rounded" placeholder="Nombre de usuario" />
          <input type="email" className="border px-4 py-2 rounded" placeholder="Correo electrónico" />
          <input type="password" className="border px-4 py-2 rounded" placeholder="Contraseña" />
          <input type="password" className="border px-4 py-2 rounded" placeholder="Confirmar Contraseña" />
          <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
