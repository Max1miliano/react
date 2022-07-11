import { useEffect } from "react";
import { useState, createContext, useContext } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import { baseDeDatos } from "../services/firebase";

const CartContext = createContext()

export const CardProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const [totalToPay, setTotalToPay] = useState(0)

    const [ todasLasCategorias, setTodasLasCategorias ] = useState()

    useEffect(() => {
        
        getCantidadCarrito()
        // eslint-disable-next-line
        updateTotalToPay()
        // eslint-disable-next-line
    }, [carrito]);

    useEffect(() => {

          const totalDeCategorias = query(collection(baseDeDatos, 'categorias'))

          getDocs(totalDeCategorias).then(respuesta => {
            const categoriasDeFirestore = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            
            setTodasLasCategorias(categoriasDeFirestore)
        })
    }, [])


    const agregarItem = (productToAdd) => {
        if (!estaEnElCarrito(productToAdd.id)) {
            setCarrito([...carrito, productToAdd ])
        }
    }

    const sacarItem = (id) => {
        const productoFueraDelCarrito = carrito.filter(prod => prod.id !== id)

        setCarrito(productoFueraDelCarrito)
    }

    const estaEnElCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const getCantidadCarrito = () => {
        let totalCantidad = 0
        carrito.forEach(prod => {
            totalCantidad += prod.cantidad
        })

        return totalCantidad
    }

    const updateTotalToPay = () => {
        let total = 0
        carrito.forEach(prod => {
            total += prod.cantidad * prod.precio
        })
        
        setTotalToPay(total)
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={{ carrito, agregarItem, totalToPay, sacarItem, estaEnElCarrito, getCantidadCarrito, limpiarCarrito, todasLasCategorias }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

export const useCart = () => {
    return useContext(CartContext)
}