import Item from '../items/items'
import '../itemList/itemList.css'


const ItemList = ({ listCatalogo }) => {
    return (
        <ul className='itemList'>
            {listCatalogo.map(catalogos => <Item key={catalogos.id} {...catalogos}/>)}
        </ul>
    )
}

export default ItemList 