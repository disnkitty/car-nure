import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { CarsProvider } from '../context/CarsContext';
import CarList from '@/pages/CarList/CarList';
import CarDetails from '@/pages/CarDetails/CarDetails';
import ErrorState from '@/pages/ErrorState/ErrorState';

export default function App() {
  return (
    <Router>
      <CarsProvider>
        <div className="flex min-h-screen w-full flex-col bg-[#F2F2F2] shadow-sm">
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/cars/:id/error" element={<ErrorState />} />
          </Routes>
        </div>
      </CarsProvider>
    </Router>
  );
}