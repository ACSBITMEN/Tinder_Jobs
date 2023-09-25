import { Link } from 'react-router-dom';
import LoginDev from "../Components/LoginDevs";
import RegistroDev from "../Components/RegisterDevs";


function Dev () {
    return (

        <>
            <div>
                <Link to="/" className="btn m-2"> ← Volver a inicio</Link>
            </div>
            <div>
                <LoginDev/>
            </div>
            <div>
                <RegistroDev />
            </div>

        </>


    )
}

export default Dev