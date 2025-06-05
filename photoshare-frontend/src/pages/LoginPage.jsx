import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-blue-200">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">Iniciar sesión</h1>
        <form className="flex flex-col gap-5">
          <div>
            <label htmlFor="username" className="block mb-1 text-sm font-medium text-blue-700">
              Nombre de usuario o correo
            </label>
            <input
              id="username"
              className="w-full border border-blue-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Tu usuario o correo"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-blue-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-blue-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Tu contraseña"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-700">
          ¿No tienes cuenta?{" "}
          <Link
            to="/registro"
            className="text-blue-600 hover:underline font-medium"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}