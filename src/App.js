import '../src/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import PascoSection from './components/Pasco/PascoSection';

function App() {
  const dispatch = useDispatch();

  return <div className='App'>
    <div className="container">
      <Nav />
      <About />
    </div>
    <PascoSection></PascoSection>
  </div>;
}

export default App;
