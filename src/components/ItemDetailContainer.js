import { collection , doc , getDoc } from "firebase/firestore";
import {React , useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../configure/firebase";

const ItemDetailContainer = () => {

    const { id } = useParams()
    let [producto, setProducto] = useState(null)

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const refDoc = doc(productosCollection, id)
        getDoc(refDoc)
            .then((resultado) => {
                setProducto(resultado.data())
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