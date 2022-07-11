import './itemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../../components/itemList/itemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { baseDeDatos } from '../../services/firebase'

import Loader from '../Loader/Loader'

const ItemListContainer = (props) => {

    const { categoriaId } = useParams()

    const [productos, setProductos] = useState([])

    // const [loading, setLoading] = useState(true)

    useEffect(() => {

        const collectionRef = categoriaId ? (
            query(collection(baseDeDatos, 'productos'), where('categoria', '==', categoriaId))
        ) : (collection(baseDeDatos, 'productos'))


        getDocs(collectionRef).then(respuesta => {
            const productosDeFirestore = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            
            
            setProductos(productosDeFirestore)
        })
    }, [categoriaId])


    return (
        <div className="container">
            <h1>{props.title}</h1>
            {productos.length > 0 ? <ItemList dataBase={productos} />
                : <Loader></Loader>}
        </div>
    )
}

export default ItemListContainer