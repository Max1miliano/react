import CartContext from '../../context/CardContext'
import '../Cart/cart.css'    
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { useNotification } from '../../notification/Notification'

import { Button, Flex, Text, Input } from '@chakra-ui/react'

import { addDoc, query, collection } from 'firebase/firestore'
import { baseDeDatos } from '../../services/firebase'

const Cart = () => {

const { carrito, totalCantidad, totalToPay, limpiarCarrito } = useContext(CartContext)

const idsAcumulados = carrito.map(soloId => soloId.id);

const dateOrderCreated = new Date
console.log(dateOrderCreated.toString())

// const useReference = useRef(0)

// console.log(useReference)

const setNotification = useNotification()

    const handleCreateOrder = () => {
        // setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Maximiliano Pompas',
                email: 'maxi@pompas.com',
                phone: '123456789',
                address: 'Direccion 456'
            },
            items: carrito,
            total: totalToPay,
            dateOrder: dateOrderCreated
        }

        const collectionRef = query(collection(baseDeDatos, 'ordenes'))

        addDoc(collectionRef, objOrder)
        setNotification('success','Su orden se genero correctamente.')
        console.log(objOrder)
    }



   return <>
    <div className='totalItemContainer'>
        { carrito < 1 ? 
        <div className='emptyCart'>
            <h1>No hay items en tu lista, puedes revisar nuestros productos desde el link debajo</h1>
             <Link to='/'>Productos</Link>
        </div> 
        : carrito.map(bolsaDeItems => <ItemCart key={bolsaDeItems.id} {...bolsaDeItems}/>)
        }
        { carrito < 1 ? '' : 
        <div className='addMoreProducts'>
            <p>El total de tu compra es de ${totalToPay} pesos</p>
            <Text>Completa los datos para generar tu orden</Text>
            <Flex flexDirection='column' width='70%'>
                <Flex width="100%" m={1}>
                    <Text fontSize="xl" width="20vw">
                        Nombre
                    </Text>
                    <Input/>
                </Flex>
                <Flex width="100%" m={1}>
                    <Text fontSize="xl" width="20vw">
                        Email
                    </Text>
                    <Input type='email'/>
                </Flex>
                <Flex width="100%" m={1}>
                    <Text fontSize="xl" width="20vw">
                        Número de contacto
                    </Text>
                    <Input type='number'/>
                </Flex>
            </Flex>
            <Button onClick={() => limpiarCarrito()}>Limpiar carrito</Button>
            <Button onClick={handleCreateOrder}>Generar orden</Button>
        </div>}
    </div>
   </>
}

export default Cart