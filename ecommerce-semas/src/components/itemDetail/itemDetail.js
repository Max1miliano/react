import { useState } from 'react'
import Counter from '../Counter/Counter.js' 
import { Link } from 'react-router-dom'
import '../itemDetail/itemDetail.css'
import { useCart } from '../../context/CardContext'

import { useNotification } from '../../notification/Notification.jsx'

const ItemDetail = ({ id, imagen, nombre, precio, descripcion }) => {

   const [cantidadAgregada, setcantidadAgregada] = useState(0)

   const {  agregarItem } = useCart()

   const setNotification = useNotification()

   const handleOnAdd = (cantidad) => {

      setNotification('success',`Se agregaron ${cantidad} ${nombre}`)
      
      console.log(`Se Agrego ${cantidad} ${nombre}`)

      agregarItem({id, nombre, precio, cantidad, imagen})

      setcantidadAgregada(cantidad)

  }

   return <>
      <div className='itemDetail'>
         <h1>{nombre}</h1>
         <p className='taste'>{ precio }</p>
         <p className='smell'>{ descripcion }</p>
         <img src={ imagen } alt=''></img>
         { cantidadAgregada === 0 ? <Counter onAdd={handleOnAdd} initial={1} stock={12} /> : <Link to='/cart'>Terminar Compra</Link> }
      </div>
   </>
}

export default ItemDetail