import { useState, useContext, useEffect } from "react"
import { db } from "../../services/firebase/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { CarritoContext } from "../../context/CarritoContext"
import { auth } from "../../services/firebase/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra"
import "./Checkout.css"
import { Link } from "react-router-dom"


const Checkout = () => {
  document.title = `Libreria Koneko - Checkout`
  const { carrito, total, cantidadTotal } = useContext(CarritoContext)
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "usuarios", user.uid)
        const document = await getDoc(docRef)
        setUsuario(document.data())
      }
    })
  }, [])

  return (
    <main >
      <h2>Checkout</h2>
      <div className='Checkout'>
        {
          carrito.map(item => <p key={item.item.id}>{item.item.nombre} - CANTIDAD: {item.cantidad}</p>)
        }
        
        <p>Total de productos: {cantidadTotal}</p>
        <p>Total: ${total}</p>
        {usuario
          ? <FinalizarCompra {...usuario} />
          : <>
            <h4>
            <div className="IniciarCerrarSesion link">
            <p> Para finalizar la compra debes: </p>
               <Link to="/crear+usuario">Crear Usuario</Link>
               <p> | | </p>
               <Link to="/login">Iniciar Sesión</Link>
              <p></p>
              <p></p>
            </div>
            </h4>
          </>
        }
      </div>
    </main>
  )
}

export default Checkout
