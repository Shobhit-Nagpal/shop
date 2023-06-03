import React, { useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "./CartProvider";

const Products = () => {

    const {addToCart} = useCart();

    const [products, setProducts] = useState([
                                    { name: 'T-Shirt', price: 19.99, quantity: 1 },
                                    { name: 'Jeans', price: 49.99, quantity: 1 },
                                    { name: 'Sweater', price: 29.99, quantity: 1 },
                                    { name: 'Jacket', price: 59.99, quantity: 1 },
                                    { name: 'Scarf', price: 9.99, quantity: 1 },
                                    { name: 'Cap', price: 14.99, quantity: 1 },
                                    { name: 'Sneakers', price: 79.99, quantity: 1 },
                                    { name: 'Belt', price: 24.99, quantity: 1 },
                                    { name: 'Socks', price: 4.99, quantity: 1 },
                                    { name: 'Gloves', price: 19.99, quantity: 1 }
                                    ])


    const increaseQty = (name) => {

        const productsCopy = [...products];

        const updatedProducts = productsCopy.map((product) => {
            if (product.name === name) {
                product.quantity++;
            }

            return product;
        });

        setProducts(updatedProducts);

    }

    const decreaseQty = (name) => {

        const productsCopy = [...products];

        const updatedProducts = productsCopy.map((product) => {
            if (product.name === name) {
                if (product.quantity > 1) {
                    product.quantity--;
                }
            }

            return product;
        });

        setProducts(updatedProducts);

    }



    return (
        <>
        <Navbar/>
        <div className="products">
            {products.map((product) => {
                return (
                    <div className="product">
                        <h1>{product.name}</h1>
                        <h3>${product.price}</h3>
                        <div className="qty"><button onClick={() => decreaseQty(product.name)}>-</button> <h3>{product.quantity}</h3> <button onClick={() => increaseQty(product.name)}>+</button></div>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                )
            })}
        </div>
        </>
    )

}

export default Products;