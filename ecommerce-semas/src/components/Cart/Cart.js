// import { useState, useContext } from 'react'
import CartContext from '../../context/CardContext'
import '../Cart/cart.css'    
import { callProducts } from '../../databaseLocal/asyncmock'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'


const Cart = () => {

const { carrito, sacarItem } = useContext(CartContext)

const bolsa = [...carrito]

console.log(bolsa)

const eliminarProducto = (id) => {
    sacarItem(id)
}

   return <>
    <div>
        { bolsa === 0 ? <h1>No hay items agregados</h1> : <ul className='buyedItemList'>
            <li><img src={ bolsa[0].imagen }  alt=''/></li>
            <li>{ bolsa[0].nombre}</li>
            <li>{ bolsa[0].cantidad}</li>
            <li>{ (bolsa[0].precio * bolsa[0].cantidad )}</li>
            <button onClick={ eliminarProducto }>Eliminar Item</button>
        </ul>}

        <p>Total: { (bolsa[0].precio * bolsa[0].cantidad ) }</p>
        
        <button><Link to='/'>Crear Orden</Link></button>
    </div>
   </>
}

export default Cart