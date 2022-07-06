import { useState } from 'react'
import Counter from '../Counter/Counter.js'
import { Link } from 'react-router-dom'
import '../itemDetail/itemDetail.css'
import { useCart } from '../../context/CardContext'

import { useNotification } from '../../notification/Notification.jsx'

import {
   Alert,
   AlertIcon
} from '@chakra-ui/react'

const ItemDetail = ({ id, imagen, nombre, precio, descripcion, stock }) => {

   const [cantidadAgregada, setcantidadAgregada] = useState(0)

   const { agregarItem } = useCart()

   const setNotification = useNotification()

   const handleOnAdd = (cantidad) => {


   if (stock === 0) {
      setNotification('error', <Alert status='error' variant='solid'>
         <AlertIcon />
         No hay productos en stock
      </Alert>)
   } else {
      setNotification('success', <Alert status='success' variant='solid'>
         <AlertIcon />
         Agregado al carrito
      </Alert>)

      
console.log(`Se Agrego ${cantidad} ${nombre}`)

agregarItem({ id, nombre, precio, cantidad, imagen })

setcantidadAgregada(cantidad)
   }


   }

   return <>
      <div className='itemDetail'>
         <h1>{nombre}</h1>
         <p className='taste'>AR$ {precio}</p>
         <p className='smell'>{descripcion}</p>
         <img src={imagen} alt=''></img>
         {cantidadAgregada === 0 ? <Counter onAdd={handleOnAdd} initial={ stock === 0 ? 1 : 0} stock={ stock } /> : <Link className='finishBuy' to='/cart'>Terminar Compra</Link>}
      </div>
   </>
}

export default ItemDetail