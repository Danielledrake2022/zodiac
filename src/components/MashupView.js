import React, { useState } from "react";
import { Link } from "react-router-dom";

 // code to mashup two APIs goes here generate data from both of them and display it on the page at the same time.
 // subject could be compatibility, since Astro API has a compatibility endpoint. 
 // maybe I can also use the same endpoint to get the compatibility between two signs?

 // Astro API: https://aztro.sameerkumar.website/ + one more.


export default function MashupView() {
   
    




 // To do multiple fetch requests in parallel, we can use the all() method from the global Promise object in JavaScript.

    
    return (  
    
        <div className="MashupView">
            <h1>Compatibility</h1>
            <p>Here you can see the compatibility between two signs</p>


        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/sign">Horoscope</Link>
            <br />
            <Link to="/about">Affirmations</Link>
        </nav>
        </div>
        
    );
    }