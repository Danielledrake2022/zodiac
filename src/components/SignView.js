import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import "./SignView.css";


export default function SignView() {
    let [sign, setSign] = useState("");
    let [date, setDate] = useState("");
    let [horoscope, setHoroscope] = useState("");
    let [error, setError] = useState("");
    let [luckyNumber, setLuckyNumber] = useState("");

     
    const handleSubmit = e => {
        e.preventDefault();
        getHoroscope();
      };

// create a function that will fetch the horoscope data from the API and set the state of the horoscope variable to the data returned from the API
// display the horoscope data in the browser

const getHoroscope = () => {
    const url = `http://aztro.sameerkumar.website/?sign=${sign}&day=${date}`;
    fetch(url, { method: "POST" })
    .then(response => response.json()) 
    .then(data => { 
        setHoroscope(data); 
        setLuckyNumber(data.lucky_number);
        setError(""); 
    }) 
    .catch(error => {
        setError(error);
        setHoroscope("");
    });
};

// create a form that will allow the user to select their sign and date and submit the form to get their horoscope from the api. Display the horoscope data in the browser

    return (
        <div className="SignView">
            <h1>Horoscope</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sign">Sign</label>
                <select 
                    id="sign"
                    value={sign}
                    onChange={e => setSign(e.target.value)}
                    >
                    <option value="">--Please choose an option--</option>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                    </select>
                    
                    <label htmlFor="date">Date</label>
                    <select 
                    id="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        </select>
                        <button type="submit">Submit</button>
                        </form>

   
    <div className="horoscope_container">
        {horoscope && (
            <div>
                <p>{horoscope.current_date}</p>
                <p>{horoscope.description}</p>
                <p>{horoscope.color}</p>
                {/* <p>{horoscope.mood}</p> */}
                <p>{horoscope.lucky_number}</p>
                {/* <p>{horoscope.lucky_time}</p> */}
                {/* <p>{luckyNumber}</p> */}
            </div> )}
        {error && <p>{error}</p>}
    </div>
    <nav className="navigation_links">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">Affirmations</Link>
        <br />
        <Link to="/mashup">Mash Up</Link>
    </nav>
    </div>
    );

    // create a function that will fetch the horoscope data from the API using POST and the 'sign' and 'date' submitted by the form
    // display the horoscope data in the browser

 
    }









        

                        
