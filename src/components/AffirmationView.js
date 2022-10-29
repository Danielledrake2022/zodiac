import React, { useState } from "react";
import "./AffirmationView.css";
import AffirmationData from "./AffirmationData";
   

export default function AffirmationView() { 
let [date, setDate] = useState("");
let [affirmation, setAffirmaton] = useState({
  affirmation: "",
});  

const handleSubmit = e => {
  e.preventDefault();
  getAffirmation();
  getDate();

};

const getAffirmation = () => {
  let randomAffirmation = AffirmationData[Math.floor(Math.random() * AffirmationData.length)];
  setAffirmaton(randomAffirmation);
};

const getDate = () => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  setDate(date);
};






  return (
     // a form that askes the user a questions and depending on that displays an affirmation in the answer section. - not sure if this is a good way to do it.
    <div className="MadameView">
      <p>The form below is under construction...</p>
      <form className="MadameView-form" onSubmit={handleSubmit}> 
        <label>
          <span>What is your name?</span>
          <input type="text" />
        </label>
        <label>
          <span>What is your birthdate?</span>
          <input type="date" />
        </label>
        <label>
          <span>What is your favorite season?</span>
          <input type="text" />
        </label>
        <label>
          <span>What is your favorite planet?</span>
          <input type="text" />
        </label>
        <button onClick={handleSubmit} type="submit">Get affirmation</button> 
        </form>   
      
  
       
        {/* Below is your affirmation based on your answers: */}
        <div className="MadameView-answer" style={affirmation.affirmation ? {border: "1px solid rgb(67, 63, 63)"} : {}}> 
        <p>{date}</p><br/>
        <p>{affirmation.affirmation}</p>
        <br/>
        <div className="Useful">
        <p> WAS THIS USEFUL? <button type="button" class="share-btn">Share</button></p>
        </div>        
        </div>
        </div>  
     
  );
}



