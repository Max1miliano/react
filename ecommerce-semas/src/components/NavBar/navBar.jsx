import CartWidget from "../cartWidget/cartWidget";

const NavBar = ({landing}) => {
    return <>
        <header>
            <nav>
                <ul class="navItems">
                    <h1>{landing}</h1>
                    <li>Coleccion 2019</li> 
                    <li>Coleccion 2020</li>
                    <li>Automaticas</li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    </>
}

export default NavBar;