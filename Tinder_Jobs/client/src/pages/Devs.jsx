import { Link } from 'react-router-dom';
import LoginDev from "../Components/LoginDevs";
import BtnSocialMedia from '../Components/BtnSocialMedia';


function Dev () {
    return (

        <>
            <div>
                <LoginDev/>
            </div>

            <div>
            <BtnSocialMedia/>
            </div>

            <div>
                <Link to="/">Volver a la página de inicio</Link>
            </div>

        </>


    )
}

export default Dev