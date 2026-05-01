import DetailRoomCard from './DetailRoomCard';
import { useRooms } from '@/context/RoomsContext';
import { useRef } from 'react';
import IconArrow from '@/ui/IconArrow';
import { useNavigate } from 'react-router-dom';

function AllMeetingRooms({ activeCategory, searchQuery }) {
 const navigate = useNavigate();
  const { rooms } = useRooms();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const all = rooms;
  const small = rooms.filter((obj) => obj.peoples === '2-4');
  const medium = rooms.filter((obj) => obj.peoples === '4-12');
  const large = rooms.filter((obj) => obj.peoples === '12+');

  let whatRender;
  if (activeCategory === 'All rooms') whatRender = all;
  if (activeCategory === 'Small (2-4)') whatRender = small;
  if (activeCategory === 'Medium (4-12)') whatRender = medium;
  if (activeCategory === 'Large (12+)') whatRender = large;
  if (searchQuery) {
    whatRender = whatRender.filter((obj) =>
      obj.roomName.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold leading-none text-cinder">
          All meeting rooms
        </h2>
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
          <DetailRoomCard    onBookClick={() => navigate(`/rooms/${obj.id}?startModal=date`)} key={obj.id} obj={obj} />
        ))}
      </div>
    </section>
  );
}

export default AllMeetingRooms;
