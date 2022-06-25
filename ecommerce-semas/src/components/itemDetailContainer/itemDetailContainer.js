import { useState, useEffect } from "react";
import { callProductsById } from "../../databaseLocal/asyncmock";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import '../itemDetailContainer/itemDetailContainer.css'

const ItemDetailcontainer = () => {

  const [productos, setproductoElegido] = useState() 
  
    const { productoId } = useParams();


    useEffect(() => {
      callProductsById(productoId).then(response => {
        setproductoElegido(response)
        })
    }, [])

    return <>
      <div className="itemDetailContainer">
        <h1>Detalle de producto</h1>
        <ItemDetail {...productos}/>
      </div>
    </>

}

export default ItemDetailcontainer 