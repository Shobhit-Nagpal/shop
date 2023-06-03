import React from "react";
import Navbar from "./Navbar";
import { useCart } from "./CartProvider";

const Cart = () => {

    const {cart, setCart} = useCart();

    const incrementQty = (name) => {

        const cartCopy = [...cart];

        const updatedCart = cartCopy.map((item) => {
            if (item.name === name) {
                item.quantity++;
            }

            return item;
        });

        setCart(updatedCart);


    }

    const decrementQty = (name) => {


        const cartCopy = [...cart];

        const updatedCart = cartCopy.map((item) => {
            if (item.name === name) {
                    item.quantity--;
            }

            return item;
        });

        const filteredCart = updatedCart.filter((item) => item.quantity > 0);

        setCart(filteredCart);

    }

    const removeFromCart = (name) => {
        const cartCopy = [...cart];

        const updatedCart = cartCopy.filter((item) => !(item.name === name));

        setCart(updatedCart);
    }

    return (
        <>
        {cart.length > 0 ? (
        <>
            <Navbar/>
            <div className="cart">
                {cart.map((item) => {
                    return (
                        <div className="item">
                            <h1>{item.name}</h1>
                            <h3>${item.price}</h3>
                            <div className="qty"><button onClick={() => decrementQty(item.name)}>-</button> <h3>{item.quantity}</h3> <button onClick={() => incrementQty(item.name)}>+</button></div>
                            <button onClick={() => removeFromCart(item.name)}>Remove</button>
                        </div>
                    )
                })}
            </div>
            <div className="checkout">
                <button>Checkout</button>
            </div>
            </>) 
            : (<>
            <Navbar/>
            <h1 className="empty">Cart is empty</h1>
            </>)}
        </>
    )

}

export default Cart;