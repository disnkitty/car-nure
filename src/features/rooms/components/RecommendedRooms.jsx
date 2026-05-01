import RoomCard from './RoomCard';
import { useRooms } from '@/context/RoomsContext';
import { useRef } from 'react';
import IconArrow from '@/ui/IconArrow';

function RecommendedRooms() {
  const { rooms } = useRooms();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold leading-none text-cinder">
          Recommended rooms
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-concrete text-cinder"
          >
            <IconArrow />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-concrete text-cinder rotate-180"
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
        {rooms.slice(5, 9).map((obj) => (
          <RoomCard key={obj.id} obj={obj} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedRooms;
