import { useState, useEffect } from "react";
import { getCatalogoById } from "../../databaseLocal/asyncmock";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import '../itemDetailContainer/itemDetailContainer.css'

const ItemDetailcontainer = () => {

    const params = useParams();

    const [semilla, setSemilla] = useState() 

    useEffect(() => {
        getCatalogoById(params.semId).then(response => {
            setSemilla(response)
        })
    }, [])

    return <>
      <div className="itemDetailContainer">
        <h1>Detalle de producto</h1>
        <ItemDetail {...semilla}/>
      </div>
    </>

}

export default ItemDetailcontainer 