export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <form className="flex flex-col space-y-4">
          <input className="border px-4 py-2 rounded" placeholder="Nombre de usuario o correo" />
          <input type="password" className="border px-4 py-2 rounded" placeholder="Contraseña" />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
        </form>
      </div>
    </div>
  );
}
