import Logo from '../../img/carrito.png'
import '../cartWidget/cartWidget.css'

const CartWidget = () => {
    return <>
    <div className='carritoDeCompras'>
        <img className='logo' src={Logo} alt="imagen carrito" title="mi carrito"/>
        <p className=''>0</p>
    </div>
    </>
}

export default CartWidget;