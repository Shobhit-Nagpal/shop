import React from "react";
import { HashRouter,Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";

const RouteSwitch = () => {
    return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </HashRouter>);
}

export default RouteSwitch;