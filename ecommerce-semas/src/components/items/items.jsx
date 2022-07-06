import '../items/items.css'
import { Link } from 'react-router-dom'

const Item = ({ nombre, imagen, precio, descripcion, id, stock }) => {

    // const handleClick = (e) => {
    //     e.stopPropagation()
    //     console.log('Hice Click')
    // }

    return (
        <div className="card">
            <img className="card-img" src= { imagen } alt=''></img>
            <div className="card-info">
                <p className="text-title">{ nombre }</p>
                <p className="text-body">{ descripcion }</p>
                <p>{ stock }</p>
            </div>
            <div className="card-footer">
                <span className="text-title">$ { precio }</span>
                <Link to={`/detail/${ id }`}><div className="card-button">
                    Ver Mas
                </div></Link>
            </div></div>
    )

}

export default Item 