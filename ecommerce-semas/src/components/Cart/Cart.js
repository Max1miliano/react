import CartContext from '../../context/CardContext'
import '../Cart/cart.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { useNotification } from '../../notification/Notification'

import { Button, Flex, Text, Input } from '@chakra-ui/react'

import { addDoc, query, collection } from 'firebase/firestore'
import { baseDeDatos } from '../../services/firebase'
import FormComponent from '../formComponent/FormComponent'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

const Cart = () => {

    const { carrito, totalCantidad, totalToPay, limpiarCarrito } = useContext(CartContext)

    // const idsAcumulados = carrito.map(soloId => soloId.id);

    const dateOrderCreated = new Date
    console.log(dateOrderCreated.toString())


    const { isOpen, onOpen, onClose } = useDisclosure()


    return <>
        <div className='totalItemContainer'>
            {carrito < 1 ?
                <div className='emptyCart'>
                    <h1>No hay items en tu lista, puedes revisar nuestros productos desde el link debajo</h1>
                    <Link to='/'>Productos</Link>
                </div>
                : carrito.map(bolsaDeItems => <ItemCart key={bolsaDeItems.id} {...bolsaDeItems} />)
            }
            {carrito < 1 ? '' :
                <div className='addMoreProducts'>
                    <p>El total de tu compra es de ${totalToPay} pesos</p>
                    <Button onClick={() => limpiarCarrito()}>Limpiar carrito</Button>
                    <Button onClick={onOpen}>Continuar compra</Button>
                    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <FormComponent></FormComponent>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Volver
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>}
        </div>
    </>
}

export default Cart