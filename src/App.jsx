import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greetings="Bienvenidos"/> } />
          <Route path='/categoria/:categoria' element={ <ItemListContainer /> }/>
          <Route path='/producto/:id' element={ <ItemDetailContainer/> } />
          <Route path='/carrito+de+compras' element={ <Cart/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App