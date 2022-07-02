
import "./App.css";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/NavBar/navBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailcontainer from "./components/itemDetailContainer/itemDetailContainer";
import { CardProvider } from './context/CardContext';
import Cart from '../src/components/Cart/Cart.js'

import { NotificationProvider } from './notification/Notification.jsx'

function App() {

  return <>
  <NotificationProvider>
    <CardProvider>
      <BrowserRouter>
        <NavBar landing={"Marca"}/> 
        <Routes>
        <Route path="/" element={<ItemListContainer title="Bienvenidos a mi ecommerce"/>}/>
        <Route path="/catalogo/:categoriaId" element={<ItemListContainer title="Bienvenidos a mi ecommerce"/>}/>
        <Route path="/detail/:productoId" element={<ItemDetailcontainer />}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CardProvider>
  </NotificationProvider>
  </>;
}  

export default App;
