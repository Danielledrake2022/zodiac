import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MadameView.css";


export default function MadameView() {   
    return (
            <>
              <main>
                <h2>Madame Zodiac</h2>
                <p>
               
                 Here I will ask you a few questions and then I will treat you with a affirmation.
                </p>
              </main>
              <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/sign">Horoscope</Link>
              </nav>
            </>
          );
        } 
   




