import IconPeople from '@/ui/IconPeople';
import IconStar from '@/ui/IconStar';
import { Link } from 'react-router-dom';

function RoomCard({ obj }) {
  return (
    <article className="mt-1 relative h-[130px] w-[195px] shrink-0 rounded-2xl transition-transform duration-300 hover:scale-105">
      <Link to={`/rooms/${obj?.id}`} className="absolute inset-0 z-10" />

      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src={obj.imageUrl}
          alt={obj.roomName}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
      </div>

      <div className="relative flex h-full flex-col justify-between p-3">
        <div />
        <h3 className="text-center font-semibold leading-snug text-white drop-shadow">
          {obj.roomName}
        </h3>

        <div className="flex items-left  gap-2 pointer-events-none select-none">
          <div className="inline-flex h-5 items-center gap-1 rounded-full bg-white px-2  shadow">
            <IconPeople size="sm" />
            <span className="text-[10px] font-medium text-cinder">
              {obj.peoples} people
            </span>
          </div>
          <div className="inline-flex h-5 items-center gap-1 rounded-full bg-white px-1.5 py-1 shadow">
            <IconStar size="sm" variant="rating" />
            <span className="text-[10px] font-medium text-cinder">
              {obj.rating}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RoomCard;
