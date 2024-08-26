import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Componente montado');
    axios.get('/cualquiercuestion')
      .then(response => setData(response.data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Respuesta del servidor:</h1>
      {data ? <p>{data}</p> : <p>Cargando...</p>}
    </div>
  );
};

export default MyComponent;