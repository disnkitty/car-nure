import IconAvailable from '@/ui/IconAvailable';
import IconCross from '@/ui/IconCross';
import IconLike from '@/ui/IconLike';
import IconPeople from '@/ui/IconPeople';
import IconStar from '@/ui/IconStar';
import Button from '@/ui/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import RoomDetails from '../../../pages/RoomDetails/RoomDetails';

function DetailRoomCard({ obj, onLike, onBookClick }) {
  const isAvailable = obj.status === 'Available';
  return (
    <article className="mt-2 mb-2 flex w-[285px] shrink-0 flex-col rounded-2xl bg-white shadow-card transition-transform duration-300 hover:scale-105">
      <Link to={`/rooms/${obj?.id}`} className="flex flex-col">
        <div className="relative h-[157px] w-full shrink-0 overflow-hidden rounded-t-2xl">
          <img
            src={obj.imageUrl}
            alt={obj.roomName}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden />

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onLike?.();
            }}
            className="absolute right-2 top-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-cinder backdrop-blur-[2px]"
          >
            <IconLike className="[&>svg]:h-5 [&>svg]:w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3 px-2 pt-3">
          <h3 className="text-base font-medium leading-none text-cinder w-fit">
            {obj.roomName}
          </h3>
          <div className="flex flex-wrap items-center gap-1">
            <span className="inline-flex h-6 items-center gap-1 rounded-pill bg-concrete px-2 py-1">
              <IconStar size="sm" variant="rating" />
              <span className="text-[10px] font-medium text-cinder">
                {obj.rating}
              </span>
            </span>
            <span className="inline-flex h-6 items-center gap-1 rounded-pill bg-concrete px-2 py-1">
              <IconPeople size="sm" />
              <span className="text-[10px] font-medium text-cinder">
                {obj.peoples} people
              </span>
            </span>
            <span className="inline-flex h-6 items-center gap-1 rounded-pill bg-concrete px-2 py-1">
              {isAvailable ? (
                <IconAvailable size="sm" />
              ) : (
                <IconCross size="sm" />
              )}
              <span className="text-[10px] font-medium text-cinder">
                {isAvailable ? 'Available' : 'Unavailable'}
              </span>
            </span>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-5">
        <div className="flex items-baseline gap-1">
          <span className="text-base font-medium leading-none text-cinder">
            ${obj.price}
          </span>
          <span className="text-sm font-normal leading-[150%] text-mist">
            /hour
          </span>
        </div>

          <Button
            type="button"
              disabled={!isAvailable}
            onClick={(e) => {
 e.stopPropagation(); 
      onBookClick?.(obj); 
  }}
            className={`flex h-10 w-[169px] shrink-0 items-center justify-center rounded-pill px-5 text-base font-medium leading-none transition-opacity ${
              isAvailable
                ? 'border-0 bg-chartreuse text-cinder active:opacity-90'
                : 'cursor-not-allowed border-0 bg-concrete text-mist'
            }`}
          >
            Book
          </Button>
     
      
       
      </div>
    </article>
  );
}

export default DetailRoomCard;
