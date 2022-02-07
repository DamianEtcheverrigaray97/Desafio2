import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './../Payments/PaymentForms.css';
import { db } from '../../configure/firebase.js'
import { addDoc, collection, serverTimestamp} from "firebase/firestore"
import { CartContext } from '../Context.js'
import { useContext } from "react";


const PaymentForms = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext);

    const commitSale = () => {
        var fullname = document.getElementById("name").value;
        var numberTarjet = document.getElementById("number").value;
        var email = document.getElementById("email").value;
        var expiry = document.getElementById("expiry").value;
        var address = document.getElementById("address").value;

        if(fullname!="" && numberTarjet!="" && email!="" && expiry!="" & address!=""){
            const ventasCollection = collection(db,"ventas")
            addDoc(ventasCollection,{
                buyer : {
                    fullname : fullname,
                    numberTarjet : numberTarjet,
                    expiry : expiry,
                    email : email,
                    address : address
                },
                items: cart,
                date: serverTimestamp(),
                total: totalPrice
            })
            emptyCart()
        }
    }
    
    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    return (
        <div className="cardPayment">
            <div className="cardPayment-body">

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form className="paymentForm">
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength="16"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="30"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group">
                            <label htmlFor="cvc">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                maxLength="50"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                    </div>
                    <div className="form-group">
                            <label htmlFor="cvc">Direccion</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                maxLength="30"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Fecha de expiración</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVC</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>
                    <button onClick={commitSale} type="button" className="btn btn-success btn-block btn-lg commitSaleButton">Pagar / Terminar compra</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentForms