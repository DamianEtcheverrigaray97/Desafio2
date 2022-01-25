import { createContext , useState } from "react";

export const CartContext = createContext();

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [totalQuant, setTotalQuant] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const delFromCart = (id) => {
        const deleting = cart.find((prod) => prod.id === id);
        const i = cart.indexOf(deleting, 0);
        const restQ = cart[i].quantity;
        const restP = cart[i].price * restQ;
        setTotalQuant(totalQuant - restQ);
        setTotalPrice(totalPrice - restP);
        const cartCopy = [...cart];
        cartCopy.splice(i, 1);
        setCart(cartCopy);
    };


    function agregarAlCarrito(product, quantity) {
        // if (isInCart(product)) {
        //     let cartCopy = [...cart];
        //     let found = cartCopy.find((prod) => prod.id === product.id);
        //     let oldQuantity = found.quantity;
        //     found.quantity = quantity;
        //     setCart(cartCopy);
        //     setTotalQuant(totalQuant + quantity - oldQuantity);
        //   } else {
            product.quantity = quantity;
            setCart([...cart, product]);
            setTotalQuant(totalQuant + quantity);
          // }
          setTotalPrice(totalPrice + quantity * product.price);
    }
    const emptyCart = () => {
        setCart([]);
        setTotalQuant(0);
        setTotalPrice(0);
    };

    const isInCart = (product) => cart.find((prod) => prod.id === product.id);

    const valorDelContexto = {
        cart,
        totalQuant,
        totalPrice,
        agregarAlCarrito,
        delFromCart,
        emptyCart
    }

    return(
        <CartContext.Provider value={valorDelContexto}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomProvider;