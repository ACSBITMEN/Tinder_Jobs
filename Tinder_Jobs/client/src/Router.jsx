import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Dev from './pages/Devs'
import PerfilDev from './pages/PerfilDev'

function MyRoutes () {
    return (
    <BrowserRouter>

            <Routes>

                <Route path = "/" element = {<Home/>}/>
                <Route path = "/devs" element = {<Dev/>}/>

                <Route path = "/devs/perfil/:id" element={<PerfilDev/>}/>
            </Routes>
    </BrowserRouter>
    )
}

export default MyRoutes
