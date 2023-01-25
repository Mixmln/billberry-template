import '../src/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav/Nav';

function App() {
  const dispatch = useDispatch();

  return <div className='App'>
    <div className="container">
      <Nav />
    </div>
  </div>;
}

export default App;
