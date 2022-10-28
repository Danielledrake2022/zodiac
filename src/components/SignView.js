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
                        <option value="yesterday">Yesterday</option>
                        </select>
                        <button type="submit">Submit</button>
                        </form>

   
    <div className="horoscope_container">
        {horoscope && (
            <div>
                <p>{horoscope.current_date.toUpperCase()}</p> 
                <p>{horoscope.description}</p>
                <p>Get power from the color: {horoscope.color}</p>
                <p>Feeling: {horoscope.mood}</p>
                <p>Your lucky number is: {horoscope.lucky_number}</p>
                <p>Enjoy life extra at: {horoscope.lucky_time}</p>
                {/* <p>{luckyNumber}</p> This is a variable that could be passed down to another view to continue getting new results on...*/}
            </div> )}
        {error && <p>{error}</p>}
    </div>
    </div>
    );
 
    }









        

                        
