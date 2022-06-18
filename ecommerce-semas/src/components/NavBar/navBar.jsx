import CartWidget from "../cartWidget/cartWidget";
import {Link, NavLink} from 'react-router-dom'
import '../NavBar/navBar.css'

const NavBar = ({landing}) => {
    return <>
        <header className="navBar">
            <nav>
                <ul className="navItems">
                    <Link to='/'><h1>{landing}</h1></Link>
                    <NavLink to={ '/catalogo/coleccion2019' }>Coleccion 2019</NavLink> 
                    <NavLink to={ '/catalogo/coleccion2020' }>Coleccion 2020</NavLink>
                    <NavLink to={ '/catalogo/automaticas' }>Automaticas</NavLink>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    </>
}

export default NavBar;