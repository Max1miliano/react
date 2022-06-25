import { useState, useContext } from 'react'
import CartContext from '../../context/CardContext'
import Counter from '../Counter/Counter.js' 
import { Link } from 'react-router-dom'
import '../itemDetail/itemDetail.css'

const ItemDetail = ({id, imagen, nombre, precio, cantidad, descripcion  }) => {

   const [cantidadAgregada, setcantidadAgregada] = useState(0)

   const {agregarItem} = useContext(CartContext)

   const handleOnAdd = (quality) => {

      console.log(`Se Agrego ${quality} ${nombre}`)

      agregarItem({id, nombre, precio, cantidad})

      setcantidadAgregada(quality)

  }


   return <>
      <div className='itemDetail'>
         <h1>{nombre}</h1>
         <p className='taste'>{ precio }</p>
         <p className='smell'>{ descripcion }</p>
         <img src={ imagen } alt=''></img>
         { cantidadAgregada === 0 ? <Counter onAdd={handleOnAdd} initial={0} stock={12} /> : <Link to='/cart'>Terminar Compra</Link> }
      </div>
   </>
}

export default ItemDetail