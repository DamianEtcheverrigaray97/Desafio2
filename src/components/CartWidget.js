import React from "react";
import { useContexto } from "./Context";
import { Link } from 'react-router-dom';

function CartWidget() {

    const { cantidadTotal } = useContexto();
    console.log("cantidad total: " + cantidadTotal);

    return(
        <div> 
            <p> { cantidadTotal }  </p>
                <Link to={`/cart`}>
                    <i className="fas fa-shopping-cart"></i>
                </Link>
        </div>
        
    )
}

export default CartWidget;
