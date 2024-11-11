import './App.css';
//import Register from '../src/modules/plants/components/Register-step-2';
//import Register from '../src/components/TaxonomicCatalog';
import Plants from '../src/modules/plants/components/Register-step-1';
import Fungus from '../src/modules/fungus/components/Register-step-1-fun.js';
import Login from '../src/modules/login/components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/plants-register" element={<Plants />} />
          <Route path="/Fungus-register" element={<Fungus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
