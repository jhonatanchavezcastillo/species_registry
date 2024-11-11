// src/components/Login.js

import React, { useState } from 'react';
import '../styles/Login.css'; // Asegúrate de crear un archivo CSS para estilos
import logo from '../../../images/logo-inecol.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  /**En realiza la petición para inicio de sesión */
  const handleLogin = () => {
    if(email === "diego@th3code.com" && password === "12345"){
      navigate('/Fungus-register');
      return;
    } 
    if(email === "jhonatan@th3code.com" && password === "12345"){
      navigate('/plants-register');
      return;
    }
    alert("No pudo iniciar sesión");
    
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío de datos, validación, etc.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form className="login-form border-green padding-50px" onSubmit={handleSubmit}>
        <div className='form-grid-2'>
          <div className='form-group'>
            <h3 className='text-align-left'>Iniciar sesión</h3>
          </div>
          <div className='form-group text-align-right'>
              <div>
                <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
              </div>
          </div>
        </div>
      
        <div className="form-group">
          <label className="text-align-left" htmlFor="email">Usuario</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-align-left" htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleLogin} className="button-init">Iniciar</button>
      </form>
    </div>
  );
};

export default Login;
