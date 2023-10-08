import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import imagen from "./logo.png"

const NavBar = () => {
  return (
    <header className='navBar'>
      <div className='brand'>
        <img src={imagen} alt="Logo de la página" />
        <h1>Libreria Koneko </h1>
      </div>
      <nav>
        <ul className='categorias'>
          <li>Libros</li>
          <li>Mangas</li>
          <li>Comics</li>
          <li>Articulos</li>
          <li>Novedades</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar