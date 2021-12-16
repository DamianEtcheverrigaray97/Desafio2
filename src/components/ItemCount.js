import React, { useState } from "react";
import BFXTTW01 from './../img/BFXTTW01.jpg';
import './../components/ItemCount.css';

const ItemsCount = props => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(10);

    return (
        <div className="product">
            <div className="countProduct1">
                <button type="button" className="btn btn-dark" onClick={() => { if(count>0){setCount(count - 1); setStock(stock + 1)}}}>-</button>
                <span> {count} </span>
                <button type="button" className="btn btn-dark" onClick={() => { if(count<10){setCount(count + 1); setStock(stock - 1)}}}>+</button>
            </div>
            <div className="addCar">
                <button type="button" className="btn btn-dark">
                    add to car
                </button>
            </div>
        </div>
    );
}

export default ItemsCount;
