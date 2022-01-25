import { collection , doc , getDoc } from "firebase/firestore";
import {React , useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../configure/firebase";

const ItemDetailContainer = () => {

    // const products = JSON.parse(localStorage.getItem("listProduct"));
    // const { id } = useParams();
    // let [product, setProduct] = useState([]);

    // useEffect(()=>{
    //     const promesa = new Promise((res,rej)=>{
    //         setTimeout(() => {
    //             product = products.find(e=>e.id == id.toString());
    //             res(product);
                
    //         }, 2000);
    //     })
    //     promesa.then((product)=>{
    //             setProduct(product)
    //     }
    //     )
    // },[]);
    
    const { id } = useParams()

    let [producto, setProducto] = useState(null)

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const refDoc = doc(productosCollection, id)
        getDoc(refDoc)
            .then((resultado) => {
                setProducto(resultado.data())
                console.log(resultado.data());
            })
            .catch((error) => {

            })
    }, [id])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    );
}

export default ItemDetailContainer