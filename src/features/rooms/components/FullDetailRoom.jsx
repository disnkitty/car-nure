import RoomOffers from '@/pages/RoomDetails/components/RoomOffers';
import Location from '@/pages/RoomDetails/components/Location';
import IconLike from '@/ui/IconLike';
import IconShare from '@/ui/IconShare';
import IconArrow from '@/ui/IconArrow';
import IconStar from '@/ui/IconStar';
import IconCase from '@/ui/IconCase';
import Button from '@/ui/Button';
import { useNavigate } from 'react-router-dom';

function FullDetailRoom({ obj }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="relative h-[255px] w-full shrink-0 overflow-hidden ">
        {' '}
        <img
          src={obj?.imageUrl}
          alt={obj?.roomName}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 backdrop-blur-[2px]"
          >
            <IconArrow />
          </button>
          <div className="flex gap-2">
            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 backdrop-blur-[2px]">
              <IconShare />
            </button>
            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 backdrop-blur-[2px]">
              <IconLike />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-8 flex flex-col gap-4 rounded-t-[32px] bg-white px-4 pt-6">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-cinder w-full text-center text-xl font-medium leading-none">
            {obj?.roomName}
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-sm font-medium text-mist">
              Entire meeting room in Lviv, Ukraine
            </p>
            <p className="text-center text-sm font-medium text-mist">
              {obj?.address} · Up to {obj?.peoples} people · {obj?.squareMeters}{' '}
              m²
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 items-center gap-1 rounded-pill bg-concrete px-2 py-1">
              <IconStar size="sm" variant="rating" />
              <span className="text-[10px] font-medium text-cinder">
                {obj?.rating}
              </span>
            </span>
            <span className="inline-flex h-6 items-center gap-1 rounded-pill bg-concrete px-2 py-1">
              <IconCase size="sm" />
              <span className="text-[10px] font-medium text-cinder">
                {obj?.bookingsCount} booking
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-concrete pt-4">
          <p className="line-clamp-2 text-sm font-normal leading-relaxed text-cinder">
            {obj?.description}
          </p>
          <Button className="flex h-[38px] w-full items-center justify-center rounded-pill bg-concrete text-sm font-medium text-cinder">
            Read more
          </Button>
        </div>

        <RoomOffers obj={obj} />

        <Location obj={obj} />
      </div>
    </div>
  );
}

export default FullDetailRoom;
