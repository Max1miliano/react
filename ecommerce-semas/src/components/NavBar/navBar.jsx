import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/navBar.css'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Button
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = ({ landing }) => {
    return <>
        <Flex flexDirection='row' bg='tomato' w='100%' p='3' justifyContent='space-around'>
            <Link to='/'><h1>{landing}</h1></Link>
            <Flex flexDirection='row' gap='2rem' justifyContent='center'>
                <Menu>
                    <Button>
                       <MenuButton as=''>
                        Categorías <ChevronDownIcon />
                       </MenuButton>
                    </Button>
                    <MenuList>
                        <MenuItem><NavLink to={'/catalogo/Accesorios'}>Accesorios</NavLink></MenuItem>
                        <MenuItem><NavLink to={'/catalogo/Computadores'}>Computadoras</NavLink></MenuItem>
                        <MenuItem><NavLink to={'/catalogo/Celulares'}>Celulares</NavLink></MenuItem>
                    </MenuList>
                    <CartWidget />
                </Menu>
            </Flex>
        </Flex>
    </>
}

export default NavBar;


