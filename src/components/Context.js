import { createContext , useContext, useState } from "react";

const context = createContext()

export const { Provider } = context;

export const useContexto = () =>{
    return useContext(context)
}

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState({});
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const borrarDelCarrito = (idProduct) => {
        const order = findOrder(idProduct)
        setCantidadTotal(cantidadTotal  - order.stock)
        const newOrder = carrito.filter(order => order.id != idProduct)
        setCarrito(newOrder);
    }

    const findOrder = id => carrito.find(order => order.id == id)

    function agregarAlCarrito(cantidad, producto) {
        const isInCar = isInCarrito(producto.id)
        if(isInCar){
            const product = findOrder(producto.id)
            product.cantidad += product.cantidad
        }else{
            const newProduct = [...carrito]
            newProduct.push({...producto, cantidad})
            setCarrito(newProduct)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    }
    const limpiarCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)
    }
    const isInCarrito = (id) => {
        const order = findOrder(id)
        return order ? true : false
    }

    const valorDelContexto = {
        cantidadTotal,
        carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider