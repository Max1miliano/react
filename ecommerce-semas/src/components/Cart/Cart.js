import CartContext from '../../context/CardContext'
import '../Cart/cart.css'    
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {

const { carrito, totalCantidad, totalToPay } = useContext(CartContext)


console.log(carrito)
console.log(totalCantidad);
console.log(totalToPay)

   return <>
    <div>
        { totalCantidad === 0 ? <div><h1>No hay items en tu lista, puedes revisar nuestros productos desde el link debajo</h1>
        <Link to='/'>Productos</Link></div> : carrito.map(bolsaDeItems => <ItemCart key={bolsaDeItems.id} {...bolsaDeItems}/> ) }

        <p>Total: { (totalToPay * totalCantidad ) }</p>
        
        <button><Link to='/'>Crear Orden</Link></button>
    </div>
   </>
}

export default Cart