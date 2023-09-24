import { Link } from 'react-router-dom';
import LoginDev from "../Components/LoginDevs";


function Dev () {
    return (

        <>
            <div>
                <Link to="/" className="btn m-2"> ← Volver a inicio</Link>
            </div>
            
            <div>
                <LoginDev/>
            </div>

        </>


    )
}

export default Dev