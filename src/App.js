// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignView from './components/SignView';
import AffirmationView from './components/AffirmationView';
import MashupView from './components/MashupView';


function App() {
 
  
  function Home() {
    return (
      <>
        <main>
          <p>You are in the right place at the right time.</p>
        </main>
        <nav>
          <Link to="/about">Affirmations</Link>
          <br/>
          <Link to="/sign">Horoscope</Link>
          <br/>
          <Link to="/mashup">Mash Up</Link>
        </nav>
      </>
    );
  }
 

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://pbs.twimg.com/profile_images/1394800170290843649/eSMhUxwe_400x400.jpg" className="App-logo" alt="logo" />
        
        <br/>
        <br/>
        <p>The Zodiac Healer</p>

        <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/sign" element={<SignView />} />
        < Route path="/about" element={<AffirmationView />} />
        < Route path="/mashup" element={<MashupView />} />
        </Routes>
      </header>
    </div>
  );
}


export default App;
