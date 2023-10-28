import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({nombre, autor, precio, img, id}) => {
  return (
    <article className='Item'>
      <img src={img} alt={nombre} />
      <h4> {nombre} </h4>
      <h4> {autor} </h4>
      <p> ${precio} </p>
      <Link to={`/producto/${id}`}><button>Ver Producto</button></Link>
    </article>
  )
}

export default Item