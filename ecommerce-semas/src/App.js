import "./App.css";
// import React, {useState} from "react";
// import NavBar from "./components/navBar.jsx";
import ItemListContainer from "./container/itemListContainer/itemListContainer";
// import Counter from "./components/Counter";

function App() {

  // const [show, setShow] = useState(true)

  return <>
  {/* <NavBar landing={"Marca"}/>  */}
  <ItemListContainer/>

  {/* <div className="app">
    <button onClick={() => setShow(!show)}>show/hide</button>
  {show && <Counter initial={0} stock={20}/>} */}
  {/* </div> */}
  </>;
}

export default App;
