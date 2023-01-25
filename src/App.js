import '../src/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import PascoSection from './components/Pasco/PascoSection';

import LifeSection from './components/Life/LifeSection';

import Blueprint from './components/BlueprintRegistry/Blueprint';


function App() {
  const dispatch = useDispatch();

  return <div className='App'>
    <Nav />
    <Hero />
    <div className="container">
      <About />
    </div>
    <PascoSection></PascoSection>
    <LifeSection />
    <Blueprint></Blueprint>

  </div>;
}

export default App;
