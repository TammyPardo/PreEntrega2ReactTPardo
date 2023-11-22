import { useState, useEffect, useRef } from "react"
import CartWidget from "../CartWidget/CartWidget"
import BarraBusqueda from '../BarraBusqueda/BarraBusqueda'
import { Link, useLocation } from 'react-router-dom'
import "./NavBar.css"
import IniciarCerrarSesion from "../IniciarCerrarSesion/IniciarCerrarSesion"

const NavBar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false)
  const menuRef = useRef(null);
const location = useLocation()

  useEffect(() => {
    const handleClickAfuera = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMostrarMenu(false);
      }
    }

    const handleScroll = () => {
      setMostrarMenu(false);
    }

    document.addEventListener("click", handleClickAfuera);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickAfuera);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

useEffect(() => {
setMostrarMenu(false)
}, [location.pathname])

  const handleOnClickMenu = (e) => {
    e.stopPropagation();
    setMostrarMenu(!mostrarMenu)
  }

  return (
    <header className='navBar'>
      <Link to="/">
        <div className='brand'>
          <img src={"../logo.png"} alt="Logo de la página" />
          <h1>Libreria Koneko </h1>
        </div>
      </Link>
      <span className="material-symbols-outlined menu " onClick={handleOnClickMenu}>menu</span>
      <div className={`gridNav${mostrarMenu ? " mostrar" : ""}`} ref={menuRef}>
        <nav className={`categoria`}>
           <ul className='categorias'>
          <Link to="/productos/libros" ><li>LIBROS</li></Link>
          <Link to="/productos/mangas" ><li>MANGAS</li></Link>
          <Link to="/productos/comics" ><li>COMICS</li></Link>
          <Link to="/productos/agendas" ><li>AGENDAS</li></Link>
        </ul>
          <BarraBusqueda />
        </nav>
        <div>
          <h4><IniciarCerrarSesion/></h4>
          <Link to="/carrito+de+compras" className={`carrito`}><CartWidget /></Link>       
        </div>

      </div>
    </header>
  )
}

export default NavBar