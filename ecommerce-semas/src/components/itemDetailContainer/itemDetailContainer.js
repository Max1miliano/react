import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import '../itemDetailContainer/itemDetailContainer.css'
// import { useContext } from "react";
import { baseDeDatos } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailcontainer = ( ) => {

  const [productos, setproductoElegido] = useState([]) 
  
  const { productoId } = useParams(); 

  // const { carrito } = useContext()

  useEffect(() => {

      const documentoReferencia = doc(baseDeDatos, 'productos', productoId) 

      getDoc(documentoReferencia).then(doc => {
        const productosFormateados = { id: doc.id, ...doc.data()}
        setproductoElegido(productosFormateados)
      })
      // eslint-disable-next-line
    }, [productoId])

    return <>
      <div className="itemDetailContainer">
        <h1>Detalle de producto</h1>
        <ItemDetail {...productos} />
      </div>
    </>

}

export default ItemDetailcontainer 