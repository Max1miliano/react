// import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/NavBar/navBar";
// import Counter from "./components/Counter";
// // para importar react router 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailcontainer from "./components/itemDetailContainer/itemDetailContainer";


function App() {
 
  // const [page, setPage] = useState('list')


  return <>
  {/* <div>
    <button onClick={() => setPage('list')}>List</button>
    <button onClick ={() => setPage('detail')}>Detail</button>
  </div> */}
  {/* {page === 'list' && <ItemListContainer title="Bienvenidos a mi ecommerce"/>}
  {page === 'detail' && <ItemDetailcontainer />} */}
  

  {/* configuracion de react router  */}

  <BrowserRouter>
      <NavBar landing={"Marca"}/> 
      <Routes>
        <Route path="/" element={<ItemListContainer title="Bienvenidos a mi ecommerce"/>}/>
        <Route path="/catalogo/:categoriaId" element={<ItemListContainer title="Bienvenidos a mi ecommerce"/>}/>
        <Route path="/detail/:semId" element={<ItemDetailcontainer />}/>
      </Routes>
  </BrowserRouter>

  </>;
}

export default App;
