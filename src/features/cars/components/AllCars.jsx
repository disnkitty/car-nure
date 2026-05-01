import DetailCarCard from './DetailCarCard';
import { useCars } from '@/context/CarsContext';
import { useRef } from 'react';
import IconArrow from '@/ui/IconArrow';
import { useNavigate } from 'react-router-dom';

function AllCars({ activeCategory, searchQuery }) {
  const navigate = useNavigate();
  const { cars } = useCars();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  let whatRender = cars;
  if (activeCategory === 'Economy') {
    whatRender = cars.filter((obj) => obj.carClass === 'Economy');
  }
  if (activeCategory === 'Mid-class') {
    whatRender = cars.filter(
      (obj) => obj.carClass === 'Mid-class' || obj.carClass === 'Mid-range',
    );
  }
  if (activeCategory === 'Business') {
    whatRender = cars.filter((obj) => obj.carClass === 'Business');
  }
  if (activeCategory === 'Crossover') {
    whatRender = cars.filter((obj) => obj.carClass === 'Crossover');
  }
  if (activeCategory === 'Electric') {
    whatRender = cars.filter((obj) => obj.carClass === 'Electric');
  }

  if (searchQuery) {
    whatRender = whatRender.filter((obj) =>
      obj.brandAndModel.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold leading-none text-cinder">All cars</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder text-lg"
          >
            <IconArrow />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="rotate-180 flex h-10 w-10 items-center justify-center rounded-full bg-concrete text-cinder text-lg"
          >
            <IconArrow />
          </button>
          <button
            type="button"
            className="border-0 bg-transparent p-0 text-sm font-normal leading-[150%] text-mist"
          >
            View All
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {whatRender.map((obj) => (
          <DetailCarCard
            onBookClick={() => navigate(`/cars/${obj.id}?startModal=date`)}
            key={obj.id}
            obj={obj}
          />
        ))}
      </div>
    </section>
  );
}

export default AllCars;
