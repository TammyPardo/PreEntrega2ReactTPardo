// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart'
import {CarritoProvider} from './context/CarritoContext'
import './App.css'
import Checkout from './componentes/Checkout/Checkout'
import Login from './componentes/Login/Login'
import CrearUsuario from './componentes/CrearUsuario/CrearUsuario'
import Home from './componentes/Home/Home'

function App() {
  


  return (
    <CarritoProvider>
      <Router>
        <div className="App">
            <NavBar/>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito+de+compras' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/crear+usuario' element={<CrearUsuario/>}/>
            <Route path='*' element={<main><h2></h2></main>} />
            </Routes>
        </div>
      </Router>
    </CarritoProvider>
  );

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito+de+compras' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/crear+usuario' element={<CrearUsuario/>}/>
            <Route path='*' element={<main><h2></h2></main>} />
          </Routes>
        
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App