import React, { useContext, useState } from "react";

const CartContext = React.createContext();

const useCart = () => {
    return useContext(CartContext);
}

const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {

        const productExists = cart.find((item) => item.name === product.name);

        if (productExists) {
            alert(`${product.name} is already in cart :)`);
        }
        else {
            const updatedCart = [...cart, product];
            setCart(updatedCart);
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {useCart};
export default CartProvider;