
import { Button, Flex, Text, Input } from '@chakra-ui/react'

import { addDoc, query, collection } from 'firebase/firestore'
import { useContext } from 'react'
import CartContext from '../../context/CardContext'
import { baseDeDatos } from '../../services/firebase'

import { useNotification } from '../../notification/Notification'


const FormComponent = () => {
    const setNotification = useNotification()


    const { carrito, totalCantidad, totalToPay, limpiarCarrito } = useContext(CartContext)

    const dateOrderCreated = new Date
    console.log(dateOrderCreated.toString())

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

        <Text>Completa los datos para generar tu orden</Text>
        <Flex flexDirection='column' width='70%'>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Nombre
                </Text>
                <Input />
            </Flex>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Email
                </Text>
                <Input type='email' />
            </Flex>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Número de contacto
                </Text>
                <Input type='number' />
            </Flex>
            <Button onClick={handleCreateOrder}>Generar orden</Button>
        </Flex>
    </>
}

export default FormComponent