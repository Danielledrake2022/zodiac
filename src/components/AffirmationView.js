import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AffirmationView.css";
import AffirmationData from "./AffirmationData";
   

export default function AffirmationView() {
let [affirmation, setAffirmaton] = useState({
  affirmation: "",
});  

const handleSubmit = e => {
  e.preventDefault();
  getAffirmation();
};

// on submit, the function getAffirmation is called and chooses a random affirmation from the affirmationdata.
const getAffirmation = () => {
  let randomAffirmation = AffirmationData[Math.floor(Math.random() * AffirmationData.length)];
  setAffirmaton(randomAffirmation);
};


  return (
     // a form that askes the user a questions and depending on that displays an affirmation in the answer section. - not sure if this is a good way to do it.
    <div className="MadameView">
      <p>Answer questions below for your affirmation</p>
      <form className="MadameView-form"> 
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
        </form>   
        <button onClick={handleSubmit} type="submit">Get affirmation</button> 
  
       
        {/* Below is your affirmation based on your answers: */}
        <div className="MadameView-answer">
        <p>
        {/* here insert data from file with affirmations   */}
        {affirmation.affirmation} 
        </p>
        </div>  
            </div>
     
  );
}



