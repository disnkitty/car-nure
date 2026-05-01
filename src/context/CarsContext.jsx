import { createContext, useContext, useEffect, useState } from 'react';

const CarsContext = createContext(null);

export function CarsProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          'https://car-nure-default-rtdb.europe-west1.firebasedatabase.app/cars.json',
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch cars: ${response.status}`);
        }
        const data = await response.json();
        setCars(Array.isArray(data) ? data : []);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <CarsContext.Provider value={{ cars, loading, error }}>
      {children}
    </CarsContext.Provider>
  );
}

export const useCars = () => useContext(CarsContext);
