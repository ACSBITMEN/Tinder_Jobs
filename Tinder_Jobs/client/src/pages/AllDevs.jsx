import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllDevs() {

    const [devs, setDevs] = useState ([]) 

    useEffect (() => {
        axios.get ('http://localhost:3001/api/devs')
        .then ((response) => {
            console.log(response.data)
            setDevs(response.data)
        })
    }, [])
    return (
        <>
            {
                devs.map ((dev)=>{
                    return (

                            <Link to = {`http://localhost:3001/api/devs/${dev._id}`}>
                                <div key={dev._id}>                            
                                    <h2>{dev.nombres}</h2>                                                   
                                    <h2>{dev.apellidos}</h2>
                                    <h2>{dev.experiencia}</h2>
                                    <h2>Habilidades:</h2>
                                        <ul>
                                        {dev.habilidades.map((habilidad, index) => (
                                            <li key={index}>{habilidad.nombre}</li>
                                        ))}
                                        </ul>
                                </div>
                            </Link>   
                    )
                })
            }
        </>
    )
}

export default AllDevs