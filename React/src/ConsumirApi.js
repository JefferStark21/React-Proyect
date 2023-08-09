import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsumirApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realizar la petición a la API para obtener el JSON
    axios.get('http://localhost:8080/users/getall')
      .then(response => {
        // Almacenar los datos obtenidos en el estado
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener el JSON:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ConsumirApi;
