import '../src/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Hero from './components/Hero/Hero';

function App() {
  const dispatch = useDispatch();

  return <div className='App'>
    <Nav />
    <Hero />
    <div className="container">

      <About />
      <h3>d</h3>
    </div>
  </div>;
}

export default App;
