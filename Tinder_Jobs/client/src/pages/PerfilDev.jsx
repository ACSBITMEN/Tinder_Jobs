import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentePerfilDev from '../Components/DevComponents/ComponentePerfilDev';


const PerfilDev = () => {
  const { id } = useParams();

  return (
    <div>
      <ComponentePerfilDev />
      
    </div>
  );
};

export default PerfilDev;