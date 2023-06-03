import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import homepageImg from "../images/homepage.jpg";

const Home = () => {

    return (
        <>
        <Navbar/>
        <div className="home">
            <div className="cta">
            <h1 className="tagline">Shop effortlessly.</h1>
            <Link to="/products">
            <button>See Products</button>
            </Link>
            </div>

            <div className="imgContainer">
                <img src={homepageImg} alt="homepage" id="homeImg"/>
            </div>
        </div>
        </>
    )

}

export default Home;