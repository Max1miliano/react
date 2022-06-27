import CartContext from "../../context/CardContext.jsx"

import { useCart } from "../../context/CardContext.jsx"

const ItemCart = ({ id, nombre, precio, cantidad}) => {

    const { sacarItem, totalCantidad } = useCart()

    const eliminarUnProducto = () => {
        sacarItem(id)
        console.log(totalCantidad)
        console.log('si funciono pero removio todos los items')
    }

    return <>
        <ul className='buyedItemList'>
            <li><img src='' alt='' /></li>
            <li>{ nombre}</li>
            <li>{ cantidad }</li>
            <li>{ precio }</li>
            <button onClick={eliminarUnProducto}>Eliminar Item</button>
        </ul></>

}

export default ItemCart