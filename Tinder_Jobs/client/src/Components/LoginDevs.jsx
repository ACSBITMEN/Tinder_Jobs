// que al realizar el redireccionamiento a 'http://localhost:5173/devs/perfil' se carguen los datos del usuario que accedio 

import { useState, useEffect } from 'react';
import axios from 'axios';
import BtnSocialMedia from '../Components/BtnSocialMedia';
import 'font-awesome/css/font-awesome.min.css';
import '../Styles/LoginDevs.css';

const LoginDev = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/devs/loginDev', {
        email,
        password,
      });

      if (response.status === 200) {
        setLoggedIn(true);
      } else {
        setErrorMessage('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      if (error.response) {
        // Si la respuesta tiene un estado de error (por ejemplo, 401 o 500)
        alert(`Error: credenciales incorrectas`); // Muestra el mensaje de error de la respuesta
      } else {
        // Si no hay respuesta, muestra un mensaje genérico de error
        alert('Error al realizar la solicitud');
      }
    }
  };

  useEffect(() => {
    if (loggedIn) {
      window.location.href = 'http://localhost:5173/devs/perfil';
    }
  }, [loggedIn]);

  return (
    <div className="container pt-5 mb-4">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center mt-3">
                        <i className="fa fa-key"></i> Iniciar Sesión
                    </h3>
                    {/* Formulario de inicio de sesión */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label mb-1">Email</label>
                            <input 
                            type="email"
                            id="email"
                            className="form-control" 
                            value={email}
                            onChange={handleEmailChange}
                            required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label mb-1">Contraseña</label>
                            <input 
                            type="password"
                            id="password"
                            className="form-control" 
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary mt-2" id='btnLogin'>Iniciar Sesión</button>
                            {errorMessage && <p>{errorMessage}</p>}
                            <button type="button" className="btn btn-secondary">Registrarse</button>
                        </div>
                    </form>
                    <BtnSocialMedia/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default LoginDev;