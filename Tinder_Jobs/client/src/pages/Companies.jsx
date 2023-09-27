import { Link } from 'react-router-dom';
import LoginCompanies from "../Components/CompanyComponents/LoginCompanies";


function Dev () {
    return (

        <>
            <div>
                <Link to="/" className="btn m-2"> ← Volver a inicio</Link>
            </div>
            <div>
                <LoginCompanies/>
            </div>
        </>

    )
}

export default Dev