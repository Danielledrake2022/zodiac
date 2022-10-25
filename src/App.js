import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {

  function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
  
  function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }
  




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Routes>
        <Route path="/" element={<Home />} />  {/*  change HOME to the element you want to render */} 
        <Route path="about" element={<About />} /> {/*  change ABOUT to the element you want to render */} 
      </Routes>


       
      </header>
    </div>
  );
}

export default App;
