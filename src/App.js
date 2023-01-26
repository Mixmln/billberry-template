import '../src/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DigitalTransformationPage from './pages/DigitalTransformationPage';
import EcommerceDevelopmentPage from './pages/EcommerceDevelopmentPage';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/digital-transformation/' element={<DigitalTransformationPage />} />
        <Route path='/ecommerce-development' element={<EcommerceDevelopmentPage />} />
      </Routes>
    </BrowserRouter >

  )
}

export default App;
