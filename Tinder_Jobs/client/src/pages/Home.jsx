import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css';
import logoImage from '../assets/BgLogoStart.png';
import IconOpcDev from '../assets/IconOpcionDev.png';
import IconOpcEmp from '../assets/IconOpcionEmp.png';

function LogoProyecto() {
  return (
    <img
    src={logoImage} 
    alt='Logo proyecto' 
    />
  );
}

function UserButton() {
  return (
    <Link to="/devs">
        <div className="card" id='OpcionDev'>
          <div className="card-body text-center">
            <h5 className="card-title d-flex justify-content-center align-items-center">Desarrollador</h5>
            <img className="img-fluid" src={IconOpcDev} alt="IconDesarrollador" />
          </div>
        </div>
    </Link>
  );
}

function CompaniesButton() {
  return (
    <Link to="/companies">
      <div className="card" id='OpcionEmp'>
        <div className="card-body text-center">
          <h5 className="card-title d-flex justify-content-center align-items-center">Empresas</h5>
          <img className="img-fluid"
          src={IconOpcEmp}
          alt="IconEmpresas"
          />
        </div>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <LogoProyecto />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h2>Ingresa como:</h2>
        </div>
      </div>
      <div className="row mt-4 d-flex justify-content-center align-items-center" id='container-options'>
        <div className="col-md-6 col-6 mb-3" id='divOpcionDev'>
          <UserButton />
        </div>
        <div className="col-md-6 col-6 mb-3" id='divOpcionEmp'>
          <CompaniesButton />
        </div>
      </div>
    </div>
  );
}

export default Home;
