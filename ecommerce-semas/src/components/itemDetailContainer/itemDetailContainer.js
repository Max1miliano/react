import { useState, useEffect } from "react";
import { callProductsById } from "../../databaseLocal/asyncmock";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import '../itemDetailContainer/itemDetailContainer.css'

const ItemDetailcontainer = () => {

  const [producto, setProducto] = useState() 
  
    const { productoId } = useParams();


    useEffect(() => {
      callProductsById(productoId).then(response => {
            setProducto(response)
        })
    }, [])

    return <>
      <div className="itemDetailContainer">
        <h1>Detalle de producto</h1>
        <ItemDetail {...producto}/>
      </div>
    </>

}

export default ItemDetailcontainer 