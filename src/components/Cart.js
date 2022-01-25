import React from "react";
import { useState , useEffect } from "react";
import { CartContext } from "./Context.js";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './../components/Cart.css';
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db } from "../configure/firebase";

const  Cart  = () =>{

    const { cart, delFromCart, emptyCart } = useContext(CartContext);
    let resume = 0;

    const commitSale = () => {
        console.log("Guardando la compra en la db...");

        const ventasCollection = collection(db,"ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : "Damian",
                lastName : "Etcheverrigaray",
                email : "Damian.etcheverrigaray@gmail.com"
            },
            items: cart,
            date: serverTimestamp(),
            total: resume
        })
        .then((resultado)=>{
            console.log(resultado)
        })
        emptyCart()
    }

    if (cart.length > 0) {
        let priceTotal = 0;
        let resumePrice = 0;
        cart.map((prod) => {
            priceTotal = prod.quantity * prod.precio;
            resumePrice = priceTotal + resumePrice;
        })
        resume = resumePrice;
        return(
            <div className="container_">
                <div>
                    <h1>Precio Total de la compra: {resumePrice}</h1>
                    <button onClick={commitSale}>Finalizar compra</button>{" "}
                    <button onClick={emptyCart}>Vaciar Carrito</button>
                </div>
                <div className="cards">
                    { cart.map((prod) => {
                        const priceTotal = prod.quantity * prod.precio;

                        return (
                            <div key={"cart" + prod.id} className="cartItem">
                                <img class="card-img-top" src={prod.img} alt="Card image cap"></img>
                                <div class="card-body">
                                <h5 class="card-title">{prod.nameProduct}</h5>
                                    <p class="card-text">Price Unit (USD): {prod.precio}</p>
                                    <p>Quantity: {prod.quantity}</p>    
                                    <p>Total Price: {priceTotal}</p>       
                                </div>
                                <button onClick={(e) => { delFromCart(prod.id); }}>
                                    Delete Item
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }else {
        return (
            <div className="mt">
                <p>Cart is empty</p>
                <Link to="/">
                    <button>Return to HOME</button>
                </Link>
            </div>
        );
    }
}

export default Cart;
