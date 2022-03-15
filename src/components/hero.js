import React from "react";
import HeroImg from "../images/Screenshot (147).png"

export default function Hero(){
    return(
        <section className="hero-div">
            <div className="hero-container">
                <img src={HeroImg} className="hero-img"></img>
            </div>
            <div className="hero-text-container">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
};