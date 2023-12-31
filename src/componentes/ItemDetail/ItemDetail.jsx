import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../../context/CarritoContext'
import "./ItemDetail.css"

const ItemDetail = ({ nombre, autor, precio, img, descripcion, stock, id, categoria }) => {
  document.title = `Libreria Koneko - ${nombre}`

  const [cantidadAlCarrito, setCantidadAlCarrito] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const handleOnAdd = (cantidad) => {
    setCantidadAlCarrito(cantidad)
    const item = {id, nombre, autor, precio, img, categoria};
    agregarAlCarrito(item, cantidad);
  }



  return (
    <article className='ItemDetail'>
      <h2>{nombre}</h2>
      <h3>{autor}</h3>
      <div className='infoDetalle'>
        <img src={img} alt={nombre} />
        <div className='textoDetalle'>
          <p className='precio'><strong>Precio:</strong> ${precio}</p>
          
          <div>
            {cantidadAlCarrito > 0
              ? (<>
                 <Link to="/carrito+de+compras"> <button className='botonFinalizarCompra'> Finalizar Compra </button> </Link>
                 <Link to="/productos"> <button className='botonFinalizarCompra'> Seguir Comprando </button> </Link>
                </>)
              : (stock > 0
                ? <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                : <p>El producto no se encuentra disponible.</p>)
            }
          </div>
          <p className='descripcion'><strong> Descripcion:</strong> {descripcion} </p>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail