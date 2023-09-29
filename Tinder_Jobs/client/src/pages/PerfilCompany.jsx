import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentePerfilCompany from '../Components/CompanyComponents/ComponentePerfilCompany';


const PerfilDev = () => {
  const { id } = useParams();

  return (
    <div>
      <ComponentePerfilCompany />
      
    </div>
  );
};

export default PerfilDev;