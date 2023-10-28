import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import BarraBusqueda from '../BarraBusqueda/BarraBusqueda'
import { Link } from 'react-router-dom'
import "./NavBar.css"



const NavBar = () => {
  return (
    <header className='navBar'>
      <Link to="/">
        <div className='brand'>
          <img src={"../logo.png"} alt="Logo de la página" />
          <h1>Libreria Koneko </h1>
        </div>
      </Link>
      <nav>
        <ul className='categorias'>
          <Link to="/categoria/libros" ><li>LIBROS</li></Link>
          <Link to="/categoria/mangas" ><li>MANGAS</li></Link>
          <Link to="/categoria/comics" ><li>COMICS</li></Link>
          <Link to="/categoria/agendas" ><li>AGENDAS</li></Link>
        </ul>
        <BarraBusqueda />
      </nav>
      <Link to="/carrito+de+compras"><CartWidget /></Link>
    </header>
  )
}

export default NavBar