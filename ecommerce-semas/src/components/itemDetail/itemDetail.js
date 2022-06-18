import '../itemDetail/itemDetail.css'

const ItemDetail = ({ nombre, genetica, sabores, img, aroma }) => {

   return <>
      <div className='itemDetail'>
         <h1>{nombre}</h1>
         <h2>{genetica}</h2>
         <p className='taste'>{ sabores }</p>
         <p className='smell'>{ aroma }</p>
         <img src={ img?.src } alt={ img?.alt }></img>
      </div>
   </>
}

export default ItemDetail