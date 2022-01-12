import React from "react";
import { useContexto } from "./Context";
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

    const { carrito, borrarDelCarrito, limpiarCarrito } = useContexto();

    if(carrito != null){
        return(
            carrito.map(producto => (
                // <div>
                //     <p> {producto.id} </p>
                //     <p> {producto.category} </p>
                //     <p> {producto.idCategory} </p>
                //     <p> {producto.nameProduct} </p>
                //     <p> {producto.precio} </p>
                //     <p> {producto.stock} </p>
                //     <p> {producto.img} </p>
                //     <p> {producto.description} </p>
                // </div>
                // <div class="card">
                <div>
                    <img class="card-img-top" src={producto.img} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">{producto.nameProduct}</h5>
                        <p class="card-text">PRECIO USD: {producto.precio}</p>
                        <p class="card-text">STOCK: {producto.stock}</p>                 
                    </div>
                    <button onClick={borrarDelCarrito(producto.id)}> Borrar del Carrito </button>
                    <button onClick={limpiarCarrito}> Limpiar Carrito</button>
                </div>
            ))
        )
    }
}

export default Cart;
