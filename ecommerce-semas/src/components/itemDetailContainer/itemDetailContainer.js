import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import { baseDeDatos } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";

import { Heading, Flex } from "@chakra-ui/react";

const ItemDetailcontainer = ( ) => {

  const [productos, setproductoElegido] = useState([]) 
  
  const { productoId } = useParams(); 

  useEffect(() => {

      const documentoReferencia = doc(baseDeDatos, 'productos', productoId) 

      getDoc(documentoReferencia).then(doc => {
        const productosFormateados = { id: doc.id, ...doc.data()}
        setproductoElegido(productosFormateados)
      })
      // eslint-disable-next-line
    }, [productoId])

    return <>
      <Flex flexDirection='column' placeItems='center'>
        <Heading>Detalle de producto</Heading>
        <ItemDetail {...productos} />
      </Flex>
    </>

}

export default ItemDetailcontainer 