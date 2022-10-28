import React, { useState } from "react";
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


const getHoroscope = () => {
    const url = `http://aztro.sameerkumar.website/?sign=${sign}&day=${date}`; // change to https if problem with port continue.
    fetch(url, { method: "POST" })
    .then(response => response.json()) 
    .then(data => { 
        setHoroscope(data); 
        setLuckyNumber(data.lucky_number); // this is not used yet, but would be passed as a prop to another component.
        setError(""); 
    }) 
    .catch(error => {
        setError(error);
        setHoroscope("");
    });
};

    return (
        <div className="SignView">
            <br/><p><u>HOROSCOPE</u></p><br/>
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
                        <option value="yesterday">Yesterday</option>
                        </select>
                        <button type="submit">Submit</button>
                        </form>

   
    <div className="horoscope_container">
        {horoscope && (
            <div>
                <p>{horoscope.current_date.toUpperCase()}</p> <br/> 
                <p>{horoscope.description}</p>
               <ul className="extra-info"><br/>
                <p>Creative flow will come from the color {horoscope.color}</p><br/>
                <p>Spend quality time with a {horoscope.compatibility}</p><br/>
                <p>During this day you might be feeling {horoscope.mood}</p><br/>
                <p>Put bets on lucky number {horoscope.lucky_number}</p><br/>
                <p>Enjoy life extra at {horoscope.lucky_time}</p><br/>
                {/* <p>{luckyNumber}</p> This is a variable data I could to pass to another child component*/}
                </ul>
                <br/>
                <div className="Useful">
                <p> WAS THIS USEFUL? <button type="button" class="...">Share</button></p>
                </div>
                    {/* <link to="mailto:">Email</link> */}
                </div> )}
                {error && <p>{error}</p>}
                </div>
                </div> 
                );}











        

                        
