// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignView from './components/SignView';
import AffirmationView from './components/AffirmationView';
import MashupView from './components/MashupView';
import NavBar from "./components/NavBar";


function App() {
 
  
  function Home() {
    return (
      <>
        <main>
          <p>You are in the right place at the right time.</p>
          <br/>
          <img className="planet-img" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/solar-system-planets-montage-black-and-white-image-ram-vasudev.jpg"/>
        </main>
      </>
    );
  }
 

  return (
    
      <div className="App">
      <header className="App-header">
        <NavBar />
        <img src="https://pbs.twimg.com/profile_images/1394800170290843649/eSMhUxwe_400x400.jpg" className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <p>- THE ZODIAC HEALER -</p>
        <br/>
        <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/sign" element={<SignView />} />
        < Route path="/affirmations" element={<AffirmationView />} />
        < Route path="/mashup" element={<MashupView />} />
        </Routes>
      </header>
    </div>
  );
}


export default App;
