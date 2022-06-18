import '../items/items.css'
import {Link} from 'react-router-dom'

const Item = ({ id, nombre, img, alt, genetica, floracion }) => {

     const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice Click')
    }

    return (
        <div className='cardItem'>
            <img src={img.src} alt={alt} />
            <ul>
                <li className='textCard'>{nombre}</li>
                <li className='textCard'>Genética: {genetica}</li>
                <li className='textCard'>Floración: {floracion} días</li>
            </ul>
            <button onClick={handleClick} className='itemButton'>
                <Link to={`/detail/${id}`}>Ver Detalle</Link>
            </button>
        </div>
    )
}

export default Item 