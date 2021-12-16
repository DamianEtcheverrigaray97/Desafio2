//Por cad avuelta del map mostramos este
import React from "react";
import BFXTTW01 from './../img/BFXTTW01.jpg';
import BFXK55RGB from './../img/BFXK55RGB.jpg';
import BFXNT3616G from './../img/BFXNT3616G.jpg';
import './../components/Item.css';
import ItemsCount from "./ItemCount";

const Item = props => {
    return(
        <div class="card">
            
            <img class="card-img-top" src={props.img} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{props.nameProduct}</h5>
                <p class="card-text">PRECIO USD: {props.precio}</p>
                <p class="card-text">STOCK: {props.precio}</p>
                <p class="card-text"><ItemsCount/></p>
                <p class="btn btn-outline-info">VER DETALLES DEL PRODUCTO</p>
                
            </div>
        </div>

        // {/* <div className="box_products">
        //     <img src={BFXTTW01}></img>
        //     <h4 className="title">{props.nameProduct}</h4>
        //     <p className="price">Precio USD:{props.precio}</p>
        //     <p className="stock">Stock: {props.stock}</p>
        // </div> */}
    );
}

export default Item;