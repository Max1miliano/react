import "./App.css";
import ItemListContainer from "./container/itemListContainer/itemListContainer";
// import React, {useState} from "react";
// import NavBar from "./components/navBar.jsx";
// import Counter from "./components/Counter";

function App() {

  // const [show, setShow] = useState(true)

  return <>
  {/* <NavBar landing={"Marca"}/>  */}
  <ItemListContainer title="Bienvenidos a mi ecommerce"/>

  {/* <div className="app">
    <button onClick={() => setShow(!show)}>show/hide</button>
  {show && <Counter initial={0} stock={20}/>} */}
  {/* </div> */}
  </>;
}

export default App;
