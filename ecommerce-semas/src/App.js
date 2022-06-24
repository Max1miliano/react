// import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/NavBar/navBar";
// import Counter from "./components/Counter";
// // para importar react router 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailcontainer from "./components/itemDetailContainer/itemDetailContainer";
import { CardProvider } from './context/CardContext';


function App() {
  return <>
    <CardProvider>
      <BrowserRouter>
        <NavBar landing={"Marca"}/> 
        <Routes>
        <Route path="/" element={<ItemListContainer title="Bienvenidos a mi ecommerce"/>}/>
        <Route path="/catalogo/:categoriaId" element={<ItemListContainer title="Bienvenidos a mi ecommerce"/>}/>
        <Route path="/detail/:productoId" element={<ItemDetailcontainer />}/>
        <Route path='/cart' element={<h1>CARD</h1>}/>
        </Routes>
      </BrowserRouter>
    </CardProvider>
  </>;
}  

export default App;
