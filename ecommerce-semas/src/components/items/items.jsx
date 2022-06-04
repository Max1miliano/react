import '../items/items.css'

const Item = ({ nombre, img, alt, genetica, floracion }) => {
    return (
        <div className='cardItem'>
            <img src={img.src} alt={alt} />
            <ul>
                <li className='textCard'>{nombre}</li>
                <li className='textCard'>Genética: {genetica}</li>
                <li className='textCard'>Floración: {floracion} días</li>
            </ul>
        </div>
    )
}

export default Item