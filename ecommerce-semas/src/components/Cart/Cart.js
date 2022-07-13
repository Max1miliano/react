import CartContext from '../../context/CardContext'
import '../Cart/cart.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { Button, Text } from '@chakra-ui/react'
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

    const { carrito, totalToPay, limpiarCarrito } = useContext(CartContext)

    const dateOrderCreated = new Date()
    console.log(dateOrderCreated.toString())


    const { isOpen, onOpen, onClose } = useDisclosure()


    return <>
        <div className='totalItemContainer'>
            {carrito < 1 ?
                <div className='emptyCart'>
                    <Text>No hay items en tu lista, puedes revisar nuestros productos desde el link debajo</Text>
                    <Link to='/'>Productos</Link>
                </div>
                : carrito.map(bolsaDeItems => <ItemCart key={bolsaDeItems.id} {...bolsaDeItems} />)
            }
            {carrito < 1 ? '' :
                <div className='addMoreProducts'>
                    <Text>El total de tu compra es de ${totalToPay} pesos</Text>
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