import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { getCatalogo } from '../../databaseLocal/asyncmock'
import ItemList from '../../components/itemList/itemList'
// componente contenedor donde hago toda la logica 


const ItemListContainer = (props) => {

const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        getCatalogo().then(response => {
            setCatalogo(response)
        })
    }, [])

// console.log(catalogo)

    // const catalogoComponents = catalogo.map(catalogos => {
    //     return(
    //         <li key={catalogos.id}>{catalogos.nombre}</li>
    //     )
    // })

    return (
    <div className="container">
        <h1>{props.title}</h1>
        <ItemList listCatalogo={catalogo}/>
    </div>
    )
}

export default ItemListContainer