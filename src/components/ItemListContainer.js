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
        { id : '1' , nameProduct : 'THERMALTAKE COOLER WATER 3.0 120 CL-W232-PL12SW-B', precio: '50', stock: '10', img: BFXTTW01, description: "Thermaltake Water 3.0 120 ARGB Sync Edition viene con un ventilador de 120 mm con un radiador de gran superficie, un bloque de agua de alto rendimiento y una bomba para la máxima refrigeración de la CPU. El ventilador Pure ARGB incorporado cuenta con cuchillas de compresión, cojinetes hidráulicos y LED de 16.8 millones de colores que están listos para sincronizarse con las placas base de 5V RGB de Asus, Gigabyte, MSI y AsRock. Los usuarios pueden cambiar fácilmente los efectos de iluminación RGB utilizando el controlador ARGB incluido en el paquete, o mediante el software ASUS Aura Sync, GIGABYTE RGB Fusion, MSI Mystic Light Sync y AsRock Polychrome. La serie Water 3.0 ARGB Sync Edition permite a los usuarios disfrutar de un mejor rendimiento de refrigeración y una mayor protección de la CPU."},
        { id : '2' , nameProduct : 'NETAC MEMORIA SHADOW RGB DDR4 3600MHz 16GB 2x8GB GREY', precio: '136', stock: '24',img: BFXNT3616G, description:"Brand Name：NetacPackage：Yes. Cooling Fin：Yes. Memory Frequency：3200 MHz, RGB：No. Origin：CN(Origin). Model Number：DDR4 3200MHz. Type：DDR4. Item Condition：New. Application：Desktop. The value of CL：16. Sequence：16-20-20-40. Frequency：3200MHz. Support：3200MHz XMP. DDR4 288pin：with Heat Sink. Ram Memory DDR4：8GB. Memoria RAM ddr4：16GB " },
        { id : '3' , nameProduct : 'CORSAIR TECLADO K55 RGB PRO (CH-9226765-SP)', precio: '58', stock: '23',img: BFXK55RGB, description:"El K55 RGB lleva el rendimiento a un nuevo nivel. Los modos de retroiluminación RGB intuitivos, sus 6 teclas macro específicas, el efecto antifantasmas multitecla y sus controles multimedia programables sobre la marcha ofrecen un gran control y capacidad de personalización, elementos esenciales para lograr la victoria."},
        { id : '4' , nameProduct : 'SEASONIC FUENTE FOCUS GM-850 (SSR-850FM)', precio: '192', stock: '4',img: BFXSSF02, description:"The newly upgraded FOCUS GM series is the successor to the FOCUS Series, which became an instant the top seller in the power supply market after its launch in 2017. Besides the small change in the series naming, the PSU housing and its packaging are also updated to be in line with the concept of the OneSeasonic Initiative. (Learn More about OneSeasonic Initiative)" },
        { id : '5' , nameProduct : 'THERMALTAKE FUENTE 1200W PS-TPD-1200F3FAPU-1', precio: '442', stock: '9',img: BFXTTF100, description:"Thermaltake, como el pionero que incorpora luces RGB en PSU, presenta la serie Thermaltake Toughpower Grand RGB, que viene con un ventilador Riing 14 RGB patentado preinstalado de 256 colores con 5 modos de iluminación (modo de ciclo RGB, rojo sólido, verde sólido, sólido Azul y Blanco Sólido), LEDs apagados y una función de memoria incorporada. Con capacidades que van desde 850W a 1200W y certificación PLUS 80 PLUS, la serie Toughpower Grand RGB adopta los componentes de la más alta calidad y un diseño totalmente modular que siempre se adapta a cualquier construcción convencional bajo cualquier circunstancia."},
        { id : '6' , nameProduct : 'THERMALTAKE GABINETE DIVIDER 300 TG ARGB CA-1S2-00M1WN-01', precio: '177', stock: '2',img: BFXTTG102, description:"La Divider 300 TG ARGB es una semi torre para formatos hasta ATX que viene con tres ventiladores frontales ARGB de 120mm de 5V preinstalados, dos ventanas de cristal templado de 3mm en el frontal y en el lateral izquierdo."},
    ];
    localStorage.setItem("listProduct", JSON.stringify(initialProducts));
    return(
        <div>
            <ItemList data={list}/>
        </div>
    )
}


export default ItemListContainer;