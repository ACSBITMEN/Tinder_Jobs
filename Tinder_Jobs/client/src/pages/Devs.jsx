import { Link } from 'react-router-dom';
import LoginDev from "../Components/LoginDevs";
// import RegisterDevs from "../Components/RegisterDevs";


function Dev () {
    return (

        <>
            <div>
                <LoginDev/>
            </div>

            {/* <div>
                <RegisterDevs/>
            </div> */}

            <div>
                <Link to="/">Volver a la página de inicio</Link>
            </div>

        </>


    )
}

export default Dev