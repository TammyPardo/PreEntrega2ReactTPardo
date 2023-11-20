import "./Home.css"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <main>
      <h2>Bienvenidos a Libreria Koneko</h2>
      <div className="">
        <img src={""} alt="" />
        <div>
          <p></p>

          <p></p>

          <p></p>
        </div>
      </div>
      <div  className="ecommerce">
        <p></p>
        <button><Link to="./productos">Ver todos los productos</Link></button>
      </div>
    </main>
  )
}

export default Home