import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { getCatalogo } from '../../databaseLocal/asyncmock'
import { getSemillasByCategoria } from '../../databaseLocal/asyncmock'
import ItemList from '../../components/itemList/itemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

const { categoriaId } = useParams() 
console.log(categoriaId)

const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        if (!categoriaId) {
            getCatalogo().then(response => {
                setCatalogo(response)
                })
        } else {
            getSemillasByCategoria(categoriaId).then(response => {
                setCatalogo(response)
                })
        }
    }, [categoriaId])

    
    

    console.log(catalogo)

    return (
    <div className="container">
        <h1>{props.title}</h1>
        <ItemList dataBase={catalogo}/>
    </div>
    )
}

export default ItemListContainer