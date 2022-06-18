import { useState, useEffect } from "react";
import { getCatalogoById } from "../../databaseLocal/asyncmock";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailcontainer = () => {

    const params = useParams();

    const [semilla, setSemilla] = useState() 

    useEffect(() => {
        getCatalogoById(params.semId).then(response => {
            setSemilla(response)
        })
    }, [])

    return <>
      <h1>Detalle de producto</h1>
      <ItemDetail {...semilla}/>
    </>

}

export default ItemDetailcontainer 