import React from "react";
import { CartContext } from "./Context.js";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './../components/Cart.css';

import PaymentForms from "../components/Payments/PaymentForms";
const  Cart  = () =>{

    const { cart, totalPrice, delFromCart, emptyCart } = useContext(CartContext);

    if (cart.length > 0) {
        return(
            <div className="container_">
                <div className="container_cart">
                    <h1 className="container_cart_title">Precio Total de la compra: {totalPrice} USD</h1>
                    <div className="payment">
                        <PaymentForms />
                    </div>
                    <button className="container_cart_buttom2" type="button" class="btn btn-secondary" onClick={emptyCart}>Vaciar Carrito</button>
                </div>
                <div className="cards">
                    { cart.map((prod) => {
                        const priceTotal = prod.quantity * prod.precio;

                        return (
                            <div>
                                <div key={"cart" + prod.id} className="cartItem">
                                    <img class="cart-img-top" src={prod.img} alt="Card image cap"></img>
                                    <div class="cart-body">
                                    <h5 class="cart-title">{prod.nameProduct}</h5>
                                        <p class="cart-text">Price Unit (USD): {prod.precio}</p>
                                        <p>Quantity: {prod.quantity}</p>    
                                        <p>Total Price: {priceTotal}</p>       
                                    </div>
                                    <button class="btn btn-danger" onClick={(e) => { delFromCart(prod.ide); }}>
                                    <i class="far fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }else {
        return (
            <div className="mt">
                <h1>Cart is empty</h1>
                <Link to="/">
                    <button class="btn btn-primary">Return to HOME</button>
                </Link>
            </div>
        );
    }
}

export default Cart;
