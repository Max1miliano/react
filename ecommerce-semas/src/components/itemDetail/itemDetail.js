import '../itemDetail/itemDetail.css'

const ItemDetail = ({nombre, imagen, precio, descripcion  }) => {

   return <>
      <div className='itemDetail'>
         <h1>{nombre}</h1>
         <p className='taste'>{ precio }</p>
         <p className='smell'>{ descripcion }</p>
         <img src={ imagen } alt=''></img>
      </div>
   </>
}

export default ItemDetail