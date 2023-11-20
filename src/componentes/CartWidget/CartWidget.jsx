import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import "./CartWidget.css"

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div className='cartWidget'>
      <span className="material-symbols-outlined">shopping_cart</span>
      <p>{cantidadTotal}</p>
    </div>
  )
}

export default CartWidget