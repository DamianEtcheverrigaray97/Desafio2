import { useState , useEffect } from "react";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";
import BFXK55RGB from './../img/BFXK55RGB.jpg';
import BFXTTF100 from './../img/BFXTTF100.jpg';
import BFXTTG102 from './../img/BFXTTG102.jpg';
import BFXPCINTEL100 from './../img/BFXPCINTEL100.jpg';
import BFXIN809 from './../img/BFXIN809.jpg';
import BFXGBM71 from './../img/BFXGBM71.jpg';
import BFXDEG01 from './../img/BFXDEG01.jpg';
import BFXAMP98 from './../img/BFXAMP98.jpg';

const ItemListContainer = () => {

    let [list, setList] = useState([]) 

    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                res(initialProducts)
            }, 2000);
        })
        
        promesa.then((productos)=>{
            if(id==undefined){
                setList(productos);
            }else{
                let filter = [];
                productos.forEach(element => {
                    if(element.category == id){
                        filter.push(element);
                    }
                });
                setList(filter)
            }

            }
        )
    },[id]);

    let initialProducts = [
        { id : '1' ,  category: 'Computadoras', idCategory: '1' , nameProduct : 'Intel Core i3 10100F/H510/8GB/SSD512GB/GTX1050TI', precio: '915', stock: '2', img: BFXPCINTEL100, description: "Procesador: Intel Core i3-100F Comet Lake Quad-Core 3.6 GHz LGA 1200. PLACA      ASUS PLACA PRIME H510M-E. MEMORIA NETAC MEMORIA DDR4 8G 2666 C19 YELLOW(NTSDD4P26SP-08Y). DISCO Sólido     NETAC DISCO M.2 NVME 512GB NV2000(NT01NV2000-512-E4X). TARJ. VIDEO     AFOX GEFORCE GTX1050TI 4GB DDR5 AF1050TI-4096D5H7-V4. GABINETE         ATX Thermaltake H330TG Black. FUENTE: EVGA 500W 100-W1-0500-KR"},

        { id : '2' ,  category: 'Computadoras' , idCategory: '1' ,nameProduct : 'PC INTEL i9 - 12900K/Z690/32GB/SSD1TB/RTX3080TI', precio: '6275', stock: '4',img: BFXIN809, description:"PROCESADOR INTEL I9 12900K LGA 1700 + TT LIQUID COOLING TH360 ARGB CL. PLACA ASUS ROG STRIX Z690-E GAMING WIFI (GEN12). MEMORIA KINGSTON FURY MEMORIA DDR5 KF548C38BB-16 x 2 modulos. DISCO SAMSUNG SSD M.2 980PRO 1TB MZ-V8P1T0. TARJ. VIDEO ASUS GEFORCE 3080 TI TUF-RTX3080TI-12G-GAMING" },

        { id : '3' ,  category: 'Computadoras' , idCategory: '1' ,nameProduct : 'PC INTEL Core i9-11900K/16GB/SSD1tb/RTX3070TI ', precio: '4400', stock: '1',img: BFXK55RGB, description:"PROCESADOR INTEL PROCESADOR I9 11900K LGA 1200. Refrigeración THERMALTAKE LIQUID COOLING TH360 ARGB CL-W300-PL12SW-A. PLACA ASUS ROG STRIX Z590-E GAMING WIFI. MEMORIA THERMALTAKE TOUGHRAM RGB DDR4 3200 CL16 16G(2x8GB)WHITE.DISCO SÃ³lido SAMSUNG SSD 980 1TB NVME M.2 MZ-V8V1T0B/AM.  TARJ. VIDEO GAINWARD GEFORCE RTX3070 Ti 8GB PHOENIX (NED307T019P2-1046X). GABINETE THERMALTAKE GABINETE AH T600 SNOW CA-1Q4-00M6WN-00. FUENTE SEASONIC FUENTE FOCUS GM-850 (SSR-850FM)"},

        { id : '4' ,  category: 'Almacenamiento' , idCategory: '2' ,nameProduct : 'GIGABYTE AORUS DISCO SSD M.2 4GEN. 2TB GP-AG42TB', precio: '529', stock: '99',img: BFXGBM71, description:"Max Sequential Read: Up to 5000 MBps. Max Sequential Write: Up to 4400 MBps. 4KB Random Read: Up to 750,000 IOPS. 4KB Random Write: Up to 700,000 IOPS" },

        { id : '5' ,  category: 'Almacenamiento' , idCategory: '2' ,nameProduct : 'SAMSUNG DISCO SSD M.2 980PRO 1TB', precio: '390', stock: '5',img: BFXTTF100, description:"Max Sequential Read: Up to 7000 MBps. Max Sequential Write: Up to 5000 MBps. 4KB Random Read: QD1: Up to 22,000 IOPS. QD32: Up to 1,000,000 IOPS. "},

        { id : '6' ,  category: 'Gabinetes' , idCategory: '3' ,nameProduct : 'THERMALTAKE GABINETE DIVIDER 300 TG ARGB CA-1S2-00M1WN-01', precio: '177', stock: '2',img: BFXTTG102, description:"La Divider 300 TG ARGB es una semi torre para formatos hasta ATX que viene con tres ventiladores frontales ARGB de 120mm de 5V preinstalados, dos ventanas de cristal templado de 3mm en el frontal y en el lateral izquierdo."},

        { id : '7' ,  category: 'Gabinetes' , idCategory: '3' ,nameProduct : 'DEEPCOOL GABINETE GENOME II BK-RD-360X', precio: '259', stock: '1',img: BFXDEG01, description:"La primera caja de juegos mejorada del mundo con sistema de refrigeración líquida integrado sistema de refrigeración líquida de radiador de 360 mm preinstalado (incluye tubo helicoidal frontal). Tubo de agua helicoidal transparente provisto de una tira de LED blanca y visible en el panel frontal. Estructura interna optimizada con áreas funcionales compartimentadas, ofreciendo mayor compatibilidad y soporte extendido para diferentes piezas 2 posiciones de montaje para la caja de HDD de 3,5 pulgadas para proporcionar una mayor flexibilidad para la instalación de la fuente de alimentación. Iluminación LED (blanca) para ventiladores de refrigeración líquida y bomba de agua espacio adicional reservado para el sistema de refrigeración por agua de bricolaje. Soporte para montaje frontal de un ventilador de 200 mm y enfriador de líquido de 120/240 mm. Ranura adicional optimizada para la instalación vertical de la tarjeta gráfica para una mayor estabilidad (usando el cable de extensión PCI-E (incluido). Abertura más amplia en la bandeja MB para facilitar la instalación del enfriador de la CPU 2x USB 3.0 * Ventana lateral ampliada Logotipo metálico en el panel lateral. Administración de cables optimizada PSU tampón de goma y filtro de polvo."},

        { id : '8' ,  category: 'Procesadores' , idCategory: '4' ,nameProduct : 'AMD PROCESADOR RYZEN 9 5950X', precio: '1345', stock: '10',img: BFXAMP98, description:"El más rápido en el juego obtén rendimiento de alta velocidad en los juegos, con el ?mejor procesador para computadoras de escritorio del mundo.AMD Ryzen para creadores, diseña más rápido procesa más rápido. Itera más rápido2. Crea más y más rápido con los procesadores AMD Ryzen?. Tecnología AMD StoreMI software que combina la velocidad de SSD con la capacidad de disco duro en una sola unidad rápida y fácil de administrar, gratuita con la placa madre AMD Serie 400. Utilidad AMD Ryzen? Master la utilidad de overclocking sencilla y a la vez potente para los procesadores AMD Ryzen?."},
    ];
    localStorage.setItem("listProduct", JSON.stringify(initialProducts));

    return(
        <div>
            <ItemList data={list}/>
        </div>
    )
}


export default ItemListContainer;