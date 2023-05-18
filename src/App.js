//import { BrowserRouter as Router, Route, Switch } from "react-router-dom" 
 import Quote from './components/Quote.jsx';
import PictCarousel from './components/PictCarousel.jsx';
import Footer from './components/Footer.jsx';
import DisplayEvent from './components/DisplayEvent.jsx';
import Menubar from './components/Navbar/Navbar.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CardItem from './components/CardItem.jsx';



function App() {
  return (
    <div className="App">      
      <Menubar/>  
      <PictCarousel />
      <Quote /> 
      <DisplayEvent /> 
       
      <Footer />      
    </div>
  
  )}

export default App;
