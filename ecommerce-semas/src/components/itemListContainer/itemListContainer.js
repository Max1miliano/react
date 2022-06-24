import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { callProducts } from '../../databaseLocal/asyncmock'
import { callProductsByCategory } from '../../databaseLocal/asyncmock'
import ItemList from '../../components/itemList/itemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const { categoriaId } = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (!categoriaId) {
            callProducts().then(response => {
                setProductos(response)
            })
        } else {
            callProductsByCategory(categoriaId).then(response => {
                setProductos(response)
            })
        }
    }, [categoriaId])

    return (
        <div className="container">
            <h1>{props.title}</h1>
            {productos.length > 0 ? <ItemList dataBase={productos} />
                : <h1>No component</h1>}

        </div>
    )
}

export default ItemListContainer