import Item from '../items/items'
import '../itemList/itemList.css'


const ItemList = ({ catalogo }) => {
    return (
        <ul className='itemList'>
            {catalogo.map(catalogos => <Item key={catalogos.id} {...catalogos}/>)}
        </ul>
    )
}

export default ItemList