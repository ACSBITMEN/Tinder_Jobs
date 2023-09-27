import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from './pages/Home'

import Dev from './pages/Devs'
import RegisterDev from './Components/DevComponents/RegisterDevs'
import PerfilDev from './pages/PerfilDev'

import Companies from './pages/Companies';
import RegisterCompany from './Components/CompanyComponents/RegisterCompanies'
import PerfilCompany from './pages/PerfilCompany'

function MyRoutes () {
    return (
    <BrowserRouter>

            <Routes>

                <Route path = "/" element = {<Home/>}/>
                <Route path = "/devs" element = {<Dev/>}/>
                <Route path = "/RegisterDev" element = {<RegisterDev />}/>
                <Route path = "/devs/perfil/:id" element={<PerfilDev/>}/>

                <Route path = "/companies" element = {<Companies/>}/>
                <Route path = "/RegisterCompany" element = {<RegisterCompany />}/>
                <Route path = "/companies/perfil/:id" element={<PerfilCompany/>}/>

            </Routes>
    </BrowserRouter>
    )
}

export default MyRoutes
