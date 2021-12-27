import React, { useState } from "react";
import './../components/ItemCount.css';
import { Link } from "react-router-dom";

const ItemCount = ({stockInitial, initial, onAdd}) => {
    console.log("stockInitial "+ stockInitial);
    console.log("initial "+initial);
    const [count, setCount] = useState(initial);

    const sumar = () =>{
        if(count < stockInitial){
            setCount(count + 1);
        }
    }

    const restar = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    const agregarItem = () =>{
        setCount(initial);
        onAdd(count);
    }

    return (
        <div className="product">
            <div className="countProduct1">
                <button type="button" className="btn btn-dark" onClick={restar}>-</button>
                <span> {count} </span>
                <button type="button" className="btn btn-dark" onClick={sumar}>+</button>
            </div>
            <div className="addCar">
                <button onClick={agregarItem} type="button" className="btn btn-dark">
                    add to car
                </button>
            </div>
            <div className="finish">
                <button  type="button" className="btn btn-dark">
                    <Link to={`/cart`}>
                        finish buying
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default ItemCount;
