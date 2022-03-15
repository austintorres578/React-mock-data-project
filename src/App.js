import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Cards from "./components/cards";
import data from "./data";

export default function App(){

    const cards = data.map(item =>{
        return(
            <Cards 
            key={item.id}
            {...item}
            /> 
        )
    })

    return(
        <div>
            <NavBar />
            <Hero />
            <section className="cards-section-container">
                {cards}
            </section>
        </div>
    )
};