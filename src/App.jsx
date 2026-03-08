import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import MapPage from './pages/MapPage';
import FindFuel from './pages/FindFuel';
import StationDetails from './pages/StationDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/find-fuel" element={<FindFuel />} />
        <Route path="/station/:id" element={<StationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
