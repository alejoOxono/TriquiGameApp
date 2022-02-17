import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandPage from './Components/LandPage/LandPage';

function App() {
  return (
    <Routes>
      <Route
      path='/'
      element={<LandPage />}
      />
    </Routes>
  );
}

export default App;
