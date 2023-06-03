import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "./CartProvider";

const Navbar = () => {

    const {cart} = useCart();

    return (
        <div className="nav">

            <Link to="/">
            <h2 className="nav-ele">Home</h2>
            </Link>

            <Link to="/products">
            <h2 className="nav-ele">Products</h2>
            </Link>

            <Link to="/cart">
            <h2 className="nav-ele">Cart({cart.length})</h2>
            </Link>

        </div>
    )

}

export default Navbar;