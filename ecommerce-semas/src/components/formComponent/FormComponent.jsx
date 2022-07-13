
import {
  Button, Text, Input, Box,
  FormControl,
  FormLabel, Alert, AlertIcon
} from '@chakra-ui/react'
import { addDoc, query, collection } from 'firebase/firestore'
import { useContext, useState } from 'react'
import CartContext from '../../context/CardContext'
import { baseDeDatos } from '../../services/firebase'
import { useNotification } from '../../notification/Notification'
import { Link } from 'react-router-dom'

const FormComponent = () => {
  const setNotification = useNotification()

  const { carrito, totalToPay } = useContext(CartContext)

  const dateOrderCreated = new Date()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  const handleCreateOrder = async () => {
    try {
      const objOrder = {
        buyer: {
          nombre: name,
          email: email,
          telefono: phone,
          direccion: address
        },
        totalItems: carrito,
        total: totalToPay,
        dateOrder: dateOrderCreated
      }

      const collectionRef = query(collection(baseDeDatos, 'ordenes'))

      addDoc(collectionRef, objOrder).then(({ id }) => {
        setNotification('success', <Alert zIndex='999' status='success' variant='solid'>
        <AlertIcon />
        La orden ${id} ha sido creada exitosamente
      </Alert>)
      })

      

      console.log(objOrder)
    }catch(error){
      return error
    }
  }

  return <>

    <Box m={4} textAlign="left">
      <Text>Completa los datos para generar tu orden</Text>

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
        <Link to="/"><Button onClick={handleCreateOrder}>Generar orden</Button></Link>
   
    </Box>
  </>
}

export default FormComponent