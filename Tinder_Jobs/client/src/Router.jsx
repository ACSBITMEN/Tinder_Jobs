import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from './pages/Home'

// devs
import Dev from './pages/Devs'
import PerfilDev from './pages/PerfilDev'
import RegisterDev from './Components/DevComponents/RegisterDevs'

// companies
import Companies from './pages/Companies';
import PerfilCompany from './pages/PerfilCompany'
import RegisterCompany from './Components/CompanyComponents/RegisterCompanies'

function MyRoutes () {
    return (
    <BrowserRouter>

            <Routes>

                <Route path = "/" element = {<Home/>}/>

                {/* rutas de desarrolladores */}
                <Route path = "/devs" element = {<Dev/>}/>
                <Route path = "/RegisterDev" element = {<RegisterDev />}/>
                <Route path = "/devs/perfil/:id" element={<PerfilDev/>}/>

                {/* rutas de compañias */}
                <Route path = "/companies" element = {<Companies/>}/>
                <Route path = "/RegisterCompany" element = {<RegisterCompany />}/>
                <Route path = "/companies/perfil/:id" element={<PerfilCompany/>}/>

            </Routes>
    </BrowserRouter>
    )
}

export default MyRoutes
