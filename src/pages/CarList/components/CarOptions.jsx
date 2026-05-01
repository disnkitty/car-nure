import { useState } from 'react';
import CarCategory from './CarCategory';
import AllCars from '@/features/cars/components/AllCars';
import RecommendedCars from '@/features/cars/components/RecommendedCars';

const CAR_CATEGORIES = [
  'All',
  'Economy',
  'Mid-class',
  'Business',
  'Crossover',
  'Electric',
];

function CarOptions({ searchQuery }) {
  const [active, setActive] = useState(CAR_CATEGORIES[0]);

  return (
    <div className="flex flex-col gap-1">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CAR_CATEGORIES.map((name) => (
          <CarCategory
            key={name}
            name={name}
            isActive={active === name}
            onSelect={() => setActive(name)}
          />
        ))}
      </div>
      <RecommendedCars activeCategory={active} searchQuery={searchQuery} />
      <AllCars activeCategory={active} searchQuery={searchQuery} />
    </div>
  );
}

export default CarOptions;
