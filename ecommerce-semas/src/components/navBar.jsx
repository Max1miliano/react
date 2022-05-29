import CartWidget from "./cartWidget";

const navBar = () => {
    return <>
        <header>
            <nav>
                <ul class="navItems">
                    <h1>Growshop</h1>
                    <li>Home</li>
                    <li>Catalogo</li>
                    <li>Contacto</li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    </>
}

export default navBar;