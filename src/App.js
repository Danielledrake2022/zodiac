import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignView from './components/SignView';
import MadameView from './components/MadameView';


function App() {

  
  function Home() {
    return (
      <>
        <main>
          <h2>Welcome!</h2>
          <p>You are in the right place at the right time.</p>
        </main>
        <nav>
          <Link to="/about">Madame Zodiac</Link>
          <br />
          <Link to="/sign">Horoscope</Link>
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
        <p>The Zodiac Healer </p>

        <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/sign" element={<SignView />} />
        < Route path="/about" element={<MadameView />} />
        </Routes>
      </header>
    </div>
  );
}


export default App;
