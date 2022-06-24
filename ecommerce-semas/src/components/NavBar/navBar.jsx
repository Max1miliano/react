import CartWidget from "../cartWidget/cartWidget";
import {Link, NavLink} from 'react-router-dom'
import '../NavBar/navBar.css'

const NavBar = ({landing}) => {
    return <>
        <header className="navBar">
            <nav>
                <ul className="navItems">
                    <Link className='linkDeNav' to='/'><h1>{landing}</h1></Link>
                    <NavLink className='linkDeNav' to={ '/catalogo/Accesorios' }>Accesorios</NavLink> 
                    <NavLink className='linkDeNav' to={ '/catalogo/Computadores' }>Computadoras</NavLink>
                    <NavLink className='linkDeNav' to={ '/catalogo/Celulares' }>Celulares</NavLink>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    </>
}

export default NavBar;