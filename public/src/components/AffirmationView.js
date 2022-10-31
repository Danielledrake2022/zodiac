import React, { useState } from "react";
import "./AffirmationView.css";
import AffirmationData from "./AffirmationData";
import AffirmationAnswers from "./AffirmationAnswers";

   

export default function AffirmationView() { 
let [date, setDate] = useState("");
let [affirmation, setAffirmaton] = useState({
  affirmation: "",
});  
let [question, setQuestion] = useState("");
let [answer, setAnswer] = useState ({ answer: "", });  

const handleSubmit = e => {
  e.preventDefault();
  getAffirmation();
  getDate();
  getQuestion();
  getAnswer();

};

const getQuestion = () => {
  let question = document.getElementById("question").value;
  setQuestion(question);
}


const getAffirmation = () => {
  let randomAffirmation = AffirmationData[Math.floor(Math.random() * AffirmationData.length)];
  setAffirmaton(randomAffirmation);
};

// Create a function that gets an answer from AffirmationAnswers.js and sets it to the state

const getAnswer = () => {
  let randomAnswer = AffirmationAnswers[Math.floor(Math.random() * AffirmationAnswers.length)];
  setAnswer(randomAnswer);
};

const getDate = () => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  setDate(date);
};

// Create a function that triggers a mailto link to send the affirmation to a friend using the email address they provide.
 const sendAffirmation = () => {
  let email = document.getElementById("email").value;
  let subject = "Affirmation for " + date;
  let body = affirmation.affirmation;
  let mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  window.location.href = mailto;
};






  return (
     // a form that askes the user a questions and depending on that displays an affirmation in the answer section. - not sure if this is a good way to do it.
    <div className="AffirmationView">
      <p>Affirmations help purify our thoughts and restructure the dynamic of our brains so that we truly begin to think nothing is impossible. </p>

      <form className="AffirmationView-form" onSubmit={handleSubmit}> 

        <label htmlFor= "name"> What is your name?</label>
          <input type="text" name="name" id="name"/>

      <p></p>
        <label htmlFor="birthday">What is your birthday?</label>
          <input type="date" name="birthday" id="birthday"/>

        <p></p>

        <label htmlFor="season">Ask the stars a question</label>
          <input type="text" name="question" id="question"/>

        <p></p>

        <p></p>
        <button onClick={handleSubmit} type="submit">Get affirmation</button> 
        </form>   
      
  
     
        {/* Below is your affirmation based on your answers: */}
        <div className="AffirmationView-answer" style={affirmation.affirmation ? {border: "1px solid rgb(67, 63, 63)"} : {}}> 
        <div className="AffirmationView-date">{date}</div>
        <br/>
        <p>{affirmation.affirmation}</p>
        <br/>
        <br/>
        <br/>
        </div>
        <div className="enterEmail"> 
      <form className="Email-form"> 
        <label className="Email-label" htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit" onClick={sendAffirmation}>
          SHARE
        </button>
      </form>

       
        <br/>  
        <br/> 
        </div>
        <div className="Question-box" style={answer.answer ? {border: "1px solid rgb(67, 63, 63)"} : {}}> 
        <div className="question-headline">THE ANSWER YOU SEEK</div>
        <br/>  
        <div className="question-display">{question}</div>
        <br/>  
        <div className="question-answer">{answer.answer}</div>
        <br/>

        </div>
     
    
    </div>



   
  );
}


