import './App.css';
import { FormProvider } from '../src/modules/fungus/components/FormContext'; // Importa el FormProvider
import RegisterStep1 from '../src/modules/fungus/components/Register-step-1-fun';
import RegisterStep2 from '../src/modules/fungus/components/Register-step-2-fun';
import RegisterStep3 from '../src/modules/fungus/components/Register-step-3-fun';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <FormProvider> {/* Envuelve todo el Router con el FormProvider */}
          <Routes>
            <Route path="/register-step-1-fun" element={<RegisterStep1 />} />
            <Route path="/register-step-2-fun" element={<RegisterStep2 />} />
            <Route path="/register-step-3-fun" element={<RegisterStep3 />} />
          </Routes>
        </FormProvider> 
      </Router>
    </div>
  );
}

export default App;
