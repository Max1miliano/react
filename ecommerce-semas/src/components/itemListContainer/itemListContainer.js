import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { getCatalogo } from '../../databaseLocal/asyncmock'
import { getSemillasByCategoria } from '../../databaseLocal/asyncmock'
import ItemList from '../../components/itemList/itemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

const { params } = useParams()

const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        if (!params) {
            getCatalogo().then(response => {
                setCatalogo(response)
                })
        } else {
            getSemillasByCategoria(params).then(response => {
                setCatalogo(response)
                })
        }
    }, [params])

    return (
    <div className="container">
        <h1>{props.title}</h1>
        <ItemList dataBase={catalogo}/>
    </div>
    )
}

export default ItemListContainer