import React from 'react'
import '../Styles/App.css'

function LogoProyecto () {
  return (
      <img className='user' src={'https://i.pinimg.com/736x/aa/bd/b6/aabdb6dead0fe78a3b1adac666b8158f.jpg'} 
      alt = {'Logo proyecto'} style = {{height: 200}} />
  )
}

function NombreProyecto () {
  return (
      <>
      <h1> TinderJobs </h1>
      </>
  )
}

function UserButton () {
  function handleClick () {
    alert ('¡Hiciste click!')
  }
  return (
    <button onClick={handleClick}>Ingresar como desarrollador </button>
  )
}

function CompaniesButton () {
  function handleClick () {
      <Link to ='/companies'> ALUMNOS </Link>
  }
  return (
    <button onClick={handleClick}>Ingresar como Compañia </button>
  )
}

function Home() {
  return (
    <>
        <>
        <LogoProyecto/>
        </>

        <>
        <NombreProyecto/>
        </>

        <>
        <UserButton/>
        </>

        <>
        <CompaniesButton/>
        </>     
    </>
)
}

export default Home



