
import "./App.css";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/NavBar/navBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailcontainer from "./components/itemDetailContainer/itemDetailContainer";
import { CardProvider } from './context/CardContext';
import Cart from '../src/components/Cart/Cart.js'
import { createContext, useState } from 'react'


function App() {

  return <>
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
  </>;
}  

export default App;
