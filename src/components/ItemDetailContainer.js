import {React , useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./../components/ItemDetail";

const ItemDetailContainer = props => {

    const products = JSON.parse(localStorage.getItem("listProduct"));
    const { id } = useParams();
    let [product, setProduct] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                product = products.find(e=>e.id == id.toString());
                res(product);
                
            }, 2000);
        })
        promesa.then((product)=>{
                setProduct(product)
        }
        )
    },[]);
    
    return (
        <ItemDetail e={product}/>
    );
}

export default ItemDetailContainer;