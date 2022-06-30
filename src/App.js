import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Reminder from './Components/Project1/Reminder';
import GroceryBud from './Components/Project10/GroceryBud';
import Stripe from './Components/Project11/Stripe';
import Tour from './Components/Project2/Tour';
import Reviews from './Components/Project3/Reviews';
import Accordian from './Components/Project4/Accordian';
import Menu from './Components/Project5/Menu';
import Experience from './Components/Project6/Experience';
import ReviewSlider from './Components/Project7.js/ReviewSlider';
import TextGenerator from './Components/Project8/TextGenerator';
import ColorGen from './Components/Project9/ColorGen';


function App() {


  return (
    <>
    
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/accordian" element={<Accordian />} /> 
        <Route path="/menu" element={<Menu />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/reviewslider" element={<ReviewSlider />} />
        <Route path="/textgen" element={<TextGenerator />} />
        <Route path="/colorgen" element={<ColorGen />} />
        <Route path="/grocery" element={<GroceryBud />} />
        <Route path="/stripe" element={<Stripe />} />
      </Routes>
      
      </BrowserRouter>
   
  

</>
  );
}

export default App;
