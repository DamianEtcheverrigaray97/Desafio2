import React from "react";
import { CartContext } from "./Context.js";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { createContext , useState } from "react";

import BFXK55RGB from './../img/BFXK55RGB.jpg';
import BFXTTF100 from './../img/BFXTTF100.jpg';
import BFXTTG102 from './../img/BFXTTG102.jpg';
import BFXPCINTEL100 from './../img/BFXPCINTEL100.jpg';
import BFXIN809 from './../img/BFXIN809.jpg';
import BFXGBM71 from './../img/BFXGBM71.jpg';
import BFXDEG01 from './../img/BFXDEG01.jpg';
import BFXAMP98 from './../img/BFXAMP98.jpg';
import './../components/Cart.css';

const  Cart  = () =>{

    const { cart, totalPrice, delFromCart, emptyCart } = useContext(CartContext);

    const commitSale = () => {

    }

    if (cart.length > 0) {
        let priceTotal = 0;
        let total = 0;
        let resumePrice = 0;
        cart.map((prod) => {
            priceTotal = prod.quantity * prod.precio;
            resumePrice = priceTotal + resumePrice;
        })
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
