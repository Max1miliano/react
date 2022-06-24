import { useState, createContext } from "react";

const CardContext = createContext()

export const CardProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)){
    setCart([...cart, productToAdd ])
  }

}

    const remoeItem = (id) => {

    const cartOutProduct = cart.filter(prod => prod.id !== id)

    setCart(cartOutProduct)
}

    const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
}

    const getCartCantidad = () => {    
    let totalCantidad = 0
    cart.forEach(prod => {
        totalCantidad += prod.cantidad
    })

    return totalCantidad
}

    return (
        <CardContext.Provider  value={{ cart, addItem, remoeItem , isInCart, getCartCantidad }}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContext