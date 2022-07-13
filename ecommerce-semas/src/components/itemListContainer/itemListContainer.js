import { useState, useEffect } from 'react'
import ItemList from '../../components/itemList/itemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { baseDeDatos } from '../../services/firebase'

import { Heading, Flex } from '@chakra-ui/react'

import Loader from '../Loader/Loader'

const ItemListContainer = (props) => {

    const { categoriaId } = useParams()

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoriaId ? (
            query(collection(baseDeDatos, 'productos'), where('categoria', '==', categoriaId))
        ) : (collection(baseDeDatos, 'productos'))
        getDocs(collectionRef).then(respuesta => {
            const productosDeFirestore = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
        setProductos(productosDeFirestore)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoriaId])

    if(loading){
        return <Loader></Loader>
    }

    return (
        <Flex flexDirection='column' placeItems='center'>
            <Heading>{props.title}</Heading>
            {productos.length > 0 ? <ItemList dataBase={productos} />
                : <Heading>Lo sentimos, aún no hay productos para esta categoría</Heading>}
        </Flex>
    )
}

export default ItemListContainer