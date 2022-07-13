import Item from '../items/items'

import { Flex } from '@chakra-ui/react'


const ItemList = ({ dataBase }) => {



    return (
        <Flex flexWrap='wrap' gap='1rem' placeContent='center'>
            {dataBase.map(catalogos => <Item key={catalogos.id} {...catalogos}/>)}
        </Flex>
    )
}

export default ItemList   