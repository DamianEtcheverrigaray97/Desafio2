import { useState , useEffect } from "react";
import ItemList from "./ItemList";
import BFXTTW01 from './../img/BFXTTW01.jpg';
import BFXK55RGB from './../img/BFXK55RGB.jpg';
import BFXNT3616G from './../img/BFXNT3616G.jpg';
import BFXSSF02 from './../img/BFXSSF02.jpg';
import BFXTTF100 from './../img/BFXTTF100.jpg';
import BFXTTG102 from './../img/BFXTTG102.jpg';

const ItemListContainer = () => {

    let [list, setList] = useState([])

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                res(initialProducts)
            }, 2000);
        })
        
        promesa.then((productos)=>{
                setList(productos)
            }
        )
    },[]);

    let initialProducts = [
        { id : '1' , nameProduct : 'THERMALTAKE COOLER WATER 3.0 120 CL-W232-PL12SW-B', precio: '50', stock: '10', img: BFXTTW01},
        { id : '2' , nameProduct : 'NETAC MEMORIA SHADOW RGB DDR4 3600MHz 16GB 2x8GB GREY', precio: '136', stock: '24',img: BFXNT3616G },
        { id : '3' , nameProduct : 'CORSAIR TECLADO K55 RGB PRO (CH-9226765-SP)', precio: '58', stock: '23',img: BFXK55RGB},
        { id : '4' , nameProduct : 'SEASONIC FUENTE FOCUS GM-850 (SSR-850FM)', precio: '192', stock: '4',img: BFXSSF02 },
        { id : '5' , nameProduct : 'THERMALTAKE FUENTE 1200W PS-TPD-1200F3FAPU-1', precio: '442', stock: '9',img: BFXTTF100},
        { id : '6' , nameProduct : 'THERMALTAKE GABINETE DIVIDER 300 TG ARGB CA-1S2-00M1WN-01', precio: '177', stock: '2',img: BFXTTG102},
    ];

    return(
        <div>
            <ItemList data={list}/>
        </div>
    )
}


export default ItemListContainer;