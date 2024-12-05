import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Voivodeship } from './pages/Voivodeship';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/:voivodeship" element={<Voivodeship/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
