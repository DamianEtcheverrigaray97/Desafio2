import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from 'react-router-dom';
import './../components/Item.css';
import ItemsCount from "./ItemCount";
import { CartContext } from "./Context.js";
import { useContext } from "react";

function ItemDetail({producto}) {

    const [isOpen, setIsOpen] = React.useState(true);
    const { agregarAlCarrito } = useContext(CartContext);
    const hideModal = () => {
        setIsOpen(false);
    };
    const onAdd = (count)=>{
        agregarAlCarrito(producto , count)
    }

    if(producto != null){
        return(    
            <Modal show={isOpen} onHide={hideModal}>
            <Link to={`/`}>
                <i class="fas fa-times"></i>
            </Link>
                <Modal.Header><img class="card-img-top" src={producto.img} alt="Card image cap"></img></Modal.Header>
                <Modal.Body>{producto.nameProduct}</Modal.Body>
                <Modal.Body>{producto.description}</Modal.Body>
                <Modal.Body> Stock: {producto.stock}</Modal.Body>
                <Modal.Body>    <ItemsCount stockInitial={producto.stock} product={producto} initial={1} onAdd={onAdd}/>   </Modal.Body>
                <Modal.Footer>Precio Unitario: {producto.precio} USD</Modal.Footer>
            </Modal>
        )
    }else{
        return (
            <>
            </>
        )
    }
    
}

export default ItemDetail;