import CartWidget from "../cartWidget/cartWidget";
import {Link} from 'react-router-dom'

const NavBar = ({landing}) => {
    return <>
        <header>
            <nav>
                <ul className="navItems">
                    <Link to='/'>
                        <h1>{landing}</h1>
                    </Link>
                    <Link to='/catalogo/coleccion2019'>Coleccion 2019</Link> 
                    <Link to='/catalogo/coleccion2020'>Coleccion 2020</Link>
                    <Link to='/catalogo/automaticas'>Automaticas</Link>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    </>
}

export default NavBar;