import Button from '@/ui/Button';
import IconStar from '@/ui/IconStar';
import IconPeople from '@/ui/IconPeople';
import { useNavigate } from 'react-router-dom';

function ReviewRoomCard({ obj, id, selectedDate, selectedTime, onChangeDateClick, onDetailsClick }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 w-full">
       <h2 className="mt-2 text-2xl font-semibold text-cinder">
Review and booking          </h2>

      <div className="w-full border border-concrete rounded-2xl  flex flex-col gap-2.5 ">
        <div className="flex flex-row items-start gap-5 w-full">
          <article className="relative h-[83px] w-[104px] shrink-0 overflow-hidden rounded-[6px]">
            <img
              src={obj.imageUrl}
              alt={obj.roomName}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden />
          </article>

          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold leading-none text-cinder">
              {obj.roomName}
            </h3>
            <div className="flex items-center gap-1 pointer-events-none select-none">
              <div className="inline-flex h-6 items-center gap-1 rounded-full bg-concrete px-2 py-1">
                <IconStar size="sm" variant="rating" />
                <span className="text-[10px] font-medium text-cinder">
                  {obj.rating}
                </span>
              </div>
              <div className="inline-flex h-6 items-center gap-1 rounded-full bg-concrete px-2 py-1">
                <IconPeople size="sm" />
                <span className="text-[10px] font-medium text-cinder">
                  {obj.peoples} people
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-start w-full border-t border-concrete pt-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-cinder">Location</p>
            <p className="text-sm font-normal text-cinder">{obj.address}</p>
          </div>
          <Button
            type="button"
            onClick={onDetailsClick}
            className="text-sm font-medium text-mist items-start shrink-0"
          >
            Details
          </Button>
        </div>

        <div className="flex flex-row justify-between items-center w-full border-t border-concrete pt-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-cinder">Dates</p>
            <p className="text-sm font-normal text-cinder">
              {selectedDate?.toLocaleDateString('en', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <p className="text-sm font-normal text-cinder">{selectedTime}</p>
          </div>
          <Button
            type="button"
            onClick={onChangeDateClick}
            className="text-sm font-medium text-mist items-start shrink-0"
          >
            Change
          </Button>
        </div>

        <div className="flex flex-row justify-between items-start w-full border-t border-concrete pt-4 pb-2">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-cinder">Total price</p>
            <p className="text-sm font-normal text-cinder">
              ${obj.price * 2} USD
            </p>
          </div>
          <Button
            type="button"
            onClick={onDetailsClick}
            className="text-sm font-medium text-mist items-start shrink-0"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReviewRoomCard;
