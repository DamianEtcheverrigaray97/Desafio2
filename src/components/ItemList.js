import Item from "./Item";
import './../components/Item.css';

const ItemList = props => {

    return(
        <div class="container">
            {props.data.map(item=>(
                <Item key={item.id} id={item.id} nameProduct={item.nameProduct} precio={item.precio} stock={item.stock} img={item.img}/>
            ))}
        </div>
    );
};

export default ItemList;