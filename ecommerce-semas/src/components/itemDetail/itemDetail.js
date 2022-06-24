import { useState, useContext } from 'react'
import CartContext from '../../context/CardContext'
import Counter from '../Counter/Counter.js' 
import { Link } from 'react-router-dom'
import '../itemDetail/itemDetail.css'

const ItemDetail = ({id, nombre, imagen, precio, descripcion, cantidad  }) => {

   const {cantidadAgregada, setCantidadAgregada} = useState(0)

   const {agregarItem} = useContext(CartContext)

   const handleOnAdd = (quantity) => {
      console.log(`Se Agrego ${quantity} ${nombre}`)

      agregarItem({id, nombre, precio, cantidad})

      setCantidadAgregada(cantidadAgregada)
  }


   return <>
      <div className='itemDetail'>
         <h1>{nombre}</h1>
         <p className='taste'>{ precio }</p>
         <p className='smell'>{ descripcion }</p>
         <img src={ imagen } alt=''></img>
         <Counter onAdd={handleOnAdd} initial={0} stock={12} />
      </div>
   </>
}

export default ItemDetail