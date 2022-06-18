import Logo from '../../img/carrito.png'
import '../cartWidget/cartWidget.css'

const CartWidget = () => {

    const showModal = (e) => {
        e.stopPropagation()
        let modal = document.getElementById('modal')
        modal.style.display = 'block'

    }
    const closeModal = (e) => {
        e.stopPropagation()
        let modal = document.getElementById('modal')
        modal.style.display = 'none'
    }

    return <>
    <div onClick={ showModal } className='carritoDeCompras'>
        <img className='logo' src={Logo} alt="imagen carrito" title="mi carrito"/>
        <p className=''>0</p>
        <div id='modal' className='modal'>
            <div className='position'>
                <span onClick={ closeModal }>X</span>
                <p>los productos que agregue</p>
            </div>
        </div>
    </div>
    </>
}

export default CartWidget;