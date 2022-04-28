import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Card from './components/cardData.js';
function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Footer" element={<Footer/>}/>
        <Route path="/cardData" element={<Card />}/>
      </Routes>
    </div>
  );
}

export default App;
