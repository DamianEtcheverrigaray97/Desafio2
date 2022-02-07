import { useState , useEffect } from "react";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../configure/firebase";
import { getDocs , query , collection, where} from "firebase/firestore"


const ItemListContainer = () => {

    let [list, setList] = useState([]) 
    const { id } = useParams();

    useEffect(()=>{
        const productosCollection = collection(db, "productos")
        if (id!=null) {
            const consulta = query(productosCollection,where("category","==",id))
            getDocs(consulta)
                .then(({ docs }) => {
                    setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            getDocs(productosCollection)
                .then(({ docs }) => {
                    setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },[id]);

    return(
        <div>
            <ItemList data={list}/>
        </div>
    )
}

export default ItemListContainer;