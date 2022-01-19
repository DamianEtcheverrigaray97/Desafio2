import React from "react";
import { CartContext } from "./Context.js";
import { Link } from 'react-router-dom';
import { useContext } from "react";

function CartWidget() {

    const { totalQuant } = useContext(CartContext);
    
    return(
        <> {totalQuant === 0 ? ( <> </>
        ) : (
        <>
            <p> { totalQuant }  </p>
            <Link to={`/cart`}>
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </>
        )}
    </>      
    )
}

export default CartWidget;
