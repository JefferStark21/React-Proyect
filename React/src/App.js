import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para autenticar al usuario con tu backend o API.
    // Por ahora, simplemente mostraremos un mensaje de error si los campos están vacíos.

    if (username.trim() === '' || password === '') {
      setError('Por favor, ingresa tu nombre de usuario y contraseña.');
    } else {
      setError('');
      // Aquí puedes realizar la lógica de autenticación o redireccionar a la siguiente página.
    }
  };

  return (
    <div className="App">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default App;