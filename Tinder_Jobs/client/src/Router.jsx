import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Dev from './pages/Devs'




// import AllDevs from './pages/AllDevs'
// import LoginDev from './Components/LoginDevs'
// import PerfilDev from './pages/perfilDev' 

function MyRoutes () {
    return (
    <BrowserRouter>

            <Routes>

                <Route path = "/" element = {<Home/>}/>
                <Route path = "/devs" element = {<Dev/>}/>


                {/* <Route path = "/api/devs" element = {<AllDevs/>}/>
                <Route path = "/api/devs/login" element = {<LoginDev/>}/> */}
                {/* <Route path = "devs/perfil" element = {<PerfilDev/>}/> */}
          
            </Routes>
    </BrowserRouter>
    )
}

export default MyRoutes
