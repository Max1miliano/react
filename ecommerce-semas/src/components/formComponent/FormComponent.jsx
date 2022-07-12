
import { Button, Text, Input, Box, Flex,
    FormControl,
    FormLabel, Alert, AlertIcon } from '@chakra-ui/react'
import { addDoc, query, collection } from 'firebase/firestore'
import { useContext, useState } from 'react'
import CartContext from '../../context/CardContext'
import { baseDeDatos } from '../../services/firebase'
import { useNotification } from '../../notification/Notification'



const FormComponent = () => {
    const setNotification = useNotification()
    
    const { carrito, totalCantidad, totalToPay, limpiarCarrito } = useContext(CartContext)

    const dateOrderCreated = new Date

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleCreateOrder = () => {
        // setLoading(true)


        const objOrder = {
            buyer: {
                nombre: name,
                email: email,
                telefono: phone,
                direccion: address
            },
            totalItems: carrito.length,
            total: totalToPay,
            dateOrder: dateOrderCreated,
            descripcionDeItems: JSON.stringify(carrito)
        }

        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(address)
        console.log(carrito)
        console.log(totalToPay)
        console.log(dateOrderCreated)

        const collectionRef = query(collection(baseDeDatos, 'ordenes'))

        addDoc(collectionRef, objOrder)

        // setNotification('success','Su orden se genero correctamente.')

        setNotification('success', <Alert status='success' variant='solid'>
        <AlertIcon />
        Su orden fue creada correctamente
     </Alert>)
        
        console.log(objOrder)
    }

    return <>

        {/* <Flex flexDirection='column' width='70%'>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Nombre
                </Text>
                <Input id="name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
                placeholder="Type your full name"/>
            </Flex>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Email
                </Text>
                <Input   id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                placeholder="Ingresá tu email"/>
            </Flex>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Repetir email
                </Text>
                <Input type='email' />
            </Flex>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Número de contacto
                </Text>
                <Input   id="phone"
                name="phone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                type="number"
                placeholder="Número de contacto" />
            </Flex>
            <Flex width="100%" m={1}>
                <Text fontSize="xl" width="20vw">
                    Direccion
                </Text>
                <Input   id="phone"
                name="phone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                type="text"
                placeholder="Direccion de envio" />
            </Flex>
            <Button onClick={handleCreateOrder}>Generar orden</Button>
        </Flex> */}
        <Box m={4} textAlign="left">
            
        <Text>Completa los datos para generar tu orden</Text>
          <form>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                id="name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
                placeholder="Type your full name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                placeholder="Ingresá tu email"
              />
            </FormControl>
            <FormControl mt={2}>
              <Input
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                placeholder="Confirma tu email"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                id="phone"
                name="phone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                type="number"
                placeholder="Número de contacto"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Direccion de envío</FormLabel>
              <Input
                id="address"
                name="address"
                onChange={(event) => setAddress(event.target.value)}
                value={address}
                type="text"
                placeholder="Calle, número, localidad"
              />
            </FormControl>
            <Button onClick={handleCreateOrder}>Generar orden</Button>
          </form>
        </Box>
    </>
}

export default FormComponent