import { useCart } from "../../context/CardContext.jsx"
import '../ItemCart/itemCart.css'

import { useNotification } from '../../notification/Notification.jsx'
import {
    Alert,
    AlertIcon
 } from '@chakra-ui/react'

const ItemCart = ({ id, nombre, precio, cantidad, imagen}) => {

    const { sacarItem, totalCantidad } = useCart()

   const setNotification = useNotification()

    const eliminarUnProducto = () => {
        sacarItem(id)
        console.log(totalCantidad)
        setNotification('success', <Alert status='error' variant='solid'>
        <AlertIcon />
        Eliminado del carrito
     </Alert>)
    }

    return <>
        <ul className='buyedItemList'>
            <li><img src={imagen} alt='' /></li>
            <li>{ nombre}</li>
            <li>{ cantidad }</li>
            <li>{ precio }</li>
            <button onClick={eliminarUnProducto}>Eliminar Item</button>
        </ul></>

}

export default ItemCart