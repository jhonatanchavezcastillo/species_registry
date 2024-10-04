import './App.css';
//import Register from '../src/modules/plants/components/Register-step-2';
//import Register from '../src/components/TaxonomicCatalog';
import Register1 from '../src/modules/fungus/components/Register-step-1-fun';
//import Register2 from '../src/modules/plants/components/Register-step-2';
//import Login from '../src/modules/login/components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/register-step-1-fun" element={<Register1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
