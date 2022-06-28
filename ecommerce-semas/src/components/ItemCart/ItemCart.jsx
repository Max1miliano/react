import { useCart } from "../../context/CardContext.jsx"

const ItemCart = ({ id, nombre, precio, cantidad, imagen}) => {

    const { sacarItem, totalCantidad } = useCart()

    const eliminarUnProducto = () => {
        sacarItem(id)
        console.log(totalCantidad)
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