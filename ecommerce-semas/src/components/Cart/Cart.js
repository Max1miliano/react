import CartContext from '../../context/CardContext'
import '../Cart/cart.css'    
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {

const { carrito, totalCantidad, totalToPay } = useContext(CartContext)

const idsAcumulados = carrito.map(soloId => soloId.id);


console.log(carrito)
console.log(totalCantidad);
console.log(totalToPay)
console.log(idsAcumulados)

   return <>
    <div className='totalItemContainer'>
        { carrito < 1 ? <div className='emptyCart'><h1>No hay items en tu lista, puedes revisar nuestros productos desde el link debajo</h1>
        <Link to='/'>Productos</Link></div> : carrito.map(bolsaDeItems => <ItemCart key={bolsaDeItems.id} {...bolsaDeItems}/>)}
        { carrito < 1 ? '' : <div className='addMoreProducts'><p>El total de tu compra es de ${totalToPay} pesos</p><button><Link to='/'>Agregar más productos</Link></button></div>}
    </div>
   </>
}

export default Cart