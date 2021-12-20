import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from 'react-router-dom';
import { useState , useEffect } from "react";
import './../components/Item.css';

function ItemDetail({e}) {
    const [isOpen, setIsOpen] = React.useState(true);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    return(
        <>     
                <Modal show={isOpen} onHide={hideModal}>
                <Link to={`/`}>
                    <i class="fas fa-times"></i>
                </Link>
                    <Modal.Header><img class="card-img-top" src={e.img} alt="Card image cap"></img></Modal.Header>
                    <Modal.Body>{e.nameProduct}</Modal.Body>
                    <Modal.Body>{e.description}</Modal.Body>
                    <Modal.Footer>Precio: {e.precio} USD</Modal.Footer>
                </Modal>
        </>        
    )
    
}

export default ItemDetail;