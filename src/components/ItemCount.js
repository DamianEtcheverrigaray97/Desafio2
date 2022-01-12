import React, { useState } from "react";
import './../components/ItemCount.css';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stockInitial, product, initial, onAdd}) => {
    console.log("stockInitial "+ stockInitial);
    console.log("initial "+initial);
    const [count, setCount] = useState(initial);
    const [check, setCheck] = useState(true);
    const notify = () => toast("Se han agregado "+count+" elementos al carrito de compras.");
    const withinStock = () => toast("No hay más stock del articulo seleccionado :(");

    const sumar = () =>{
        if(count < stockInitial){
            setCount(count + 1);
        }
        // else{
        //     withinStock();
        // }
    }

    const seguirComprando = () => {
        setCheck(true);
    };

    const restar = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    const agregarItem = () =>{
        setCount(initial);
        onAdd(count, product);
        setCheck(false);
        notify();
    }
    if(check){
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
            </div>
        );
    }else{
        return (
            <div className="product">
                <div className="finish">
                    <button  type="button" className="btn btn-dark">
                        <Link to={`/cart`}>
                            Finalizar Compra
                        </Link>
                    </button>
                </div>
                <div className="continueBuying">
                    <button  type="button" onClick={seguirComprando} className="btn btn-dark">
                        Continuar Comprando
                    </button>
                </div>
                <ToastContainer />
            </div>
        );
    }
    
}

export default ItemCount;
