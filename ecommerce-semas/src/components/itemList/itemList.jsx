import Item from '../items/items'
import '../itemList/itemList.css'


const ItemList = ({ dataBase }) => {



    return (
        <ul className='itemList'>
            {dataBase.map(catalogos => <Item key={catalogos.id} {...catalogos}/>)}
        </ul>
    )
}

export default ItemList   