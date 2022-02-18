import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandPage from './Components/LandPage/LandPage';
import Records from './Components/Records/Records';

function App() {
  return (
    <Routes>
      <Route
      path='/'
      element={<LandPage />}
      />
      <Route
      path='/historial'
      element={<Records />}
      />
    </Routes>
  );
}

export default App;
