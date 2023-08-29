import React from "react";
import About from "./About";

function About ({image = "https://via.placeholder.com/215", About }){


return (
    <aside>
        <img src = {image} alt = "blog logo"/>
        <p>{About}</p>
        </aside>);
    
}

export default About

