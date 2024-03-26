import React, { useEffect, useState } from "react";
import * as auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login(props) {
  const { onLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChangeLogin = async (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return console.log(password);
    }

    try {
      const data = await auth.login(password, email);

      console.log(data);

      if (data.token) {
        onLogin();

        setEmail("");
        setPassword("");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error durante la autenticación:", error.message);
    }
  };

  const tokenCheck = async () => {
    const jwt = localStorage.getItem("jwt") || localStorage.getItem("token");

    if (jwt) {
      try {
        const res = await auth.getContent(jwt);

        if (res) {
          console.log(res);
          await onLogin(); // Esperar a que onLogin termine antes de continuar
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        // Manejar el error de alguna manera
      }
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <>
      <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative z-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="logo.svg" alt="Cicnos" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ¡Inicia sesión!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmitLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChangeLogin}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-orange-400 hover:text-orange-200"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleChangeLogin}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No te haz registrado?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-orange-400 hover:text-orange-200"
            >
              ¡Registrate ahora!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
