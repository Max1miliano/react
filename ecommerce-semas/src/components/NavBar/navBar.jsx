import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/navBar.css'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Flex
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = ({ landing }) => {
    return <>
        <Box bg='tomato' w='100%   ' p='3'>
           <Flex flexDirection='row'>
                <Menu>
                    <Link to='/'><h1>{landing}</h1></Link>
                    <MenuButton as=''>
                        Categorías <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                    <MenuItem><NavLink to={ '/catalogo/Accesorios' }>Accesorios</NavLink></MenuItem>
                    <MenuItem><NavLink to={ '/catalogo/Computadores' }>Computadoras</NavLink></MenuItem>
                    <MenuItem><NavLink to={ '/catalogo/Celulares' }>Celulares</NavLink></MenuItem>
                    </MenuList>
                    <CartWidget />
                </Menu>
           </Flex>
        </Box>    
    </>
}

export default NavBar;   


