import React, { useState } from "react";
import "./SignView.css";

export default function SignView() { 
    let [sign, setSign] = useState("");
    let [date, setDate] = useState("");
    let [horoscope, setHoroscope] = useState("");
    let [error, setError] = useState("");
    // let [luckyNumber, setLuckyNumber] = useState("");
    let [user, setUser] = useState("");
  
    
    const handleSubmit = e => {
        e.preventDefault();
        getHoroscope();
      };


const getHoroscope = () => {
    const url = `https://aztro.sameerkumar.website/?sign=${sign}&day=${date}`; // change to https if problem with port continue.
    fetch(url, { method: "POST" })
    .then(response => response.json()) 
    .then(data => { 
        setHoroscope(data); 
        // setLuckyNumber(data.lucky_number); 
        setError(""); 
    }) 
    .catch(error => {
        setError(error);
        setHoroscope("");
    });
};




    return (
        <div className="SignView">
        <p>HOROSCOPE</p><br/>
            <form onSubmit={handleSubmit}>  
            <label>Name</label> 
            <input type="text" placeholder="name" value={user} onChange={e => setUser(e.target.value)} />
            <br/>
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
                        <br/>
                       
    
    <div className="horoscope_container" style={horoscope ? {border: "1px solid rgb(67, 63, 63)"} : {}}> 
        {horoscope && (
            <div>
                <p className="date">{horoscope.current_date.toUpperCase()}</p><br/>
                <p> Dear {user[0].toUpperCase() + user.substring(1)},</p><br/>
                <p>{horoscope.description}</p>
               <ul className="extra-info"><br/>
                <p>Creative flow will come from the color {horoscope.color}</p><br/>
                <p>Spend quality time with a {horoscope.compatibility}</p><br/>
                <p>During this day you might be feeling {horoscope.mood}</p><br/>
                <p>Put bets on lucky number {horoscope.lucky_number}</p><br/>
                <p>Enjoy life extra at {horoscope.lucky_time}</p><br/>
                </ul>
                <br/>
                <img className="planet-img" src="https://c0.wallpaperflare.com/preview/18/14/478/moon-white-planet-full-moon.jpg"/>
                

                <div className="Useful">
                <p> WAS THIS USEFUL? <button type="button" class="share-btn">Share</button></p>
                </div>
                </div> )}
                {error && <p>{error}</p>}
                </div>
                </div> 
                );}











        

                        
