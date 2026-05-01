import Button from '@/ui/Button';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import IconArrow from '@/ui/IconArrow';
import IconCross from '@/ui/IconCross';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDragToClose } from '../../useDragToClose';


const TIME_SLOTS = [
  '09:00 AM - 11:00 AM',
  '15:00 PM - 17:00 PM',
  '17:30 PM - 19:00 PM',
];


function ChooseTime({
  onTimeArrow,
  selectedDate,
  onNext,
  onTimeNextClick,
  onTimeClose,
}) {
  const [selected, setSelected] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const sheetRef = useRef(null);
  const dragHandle = useDragToClose(onTimeClose, 80, sheetRef);


  const [isClosing, setIsClosing] = useState(false);
  const handleSmoothClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onTimeClose();
    }, 300);
  };
  const formattedDate = selectedDate?.toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });


  return (
    <div className="fixed inset-0 z-50 flex flex-col items-end justify-end lg:items-center lg:justify-center lg:p-6">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleSmoothClose}
      />
      <div
        ref={sheetRef}
        className={`relative flex h-[810px] w-full max-h-[calc(100vh-42px)] flex-col overflow-hidden rounded-t-2xl bg-white lg:h-[760px] lg:w-[560px] lg:max-h-[calc(100vh-64px)] lg:rounded-2xl transition-transform duration-300 ease-in-out ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
       
<div
  onPointerDown={dragHandle.onPointerDown}
  onClick={handleSmoothClose}
  className="my-5 mb-4 justify-between flex cursor-grab touch-none flex-row justify-center gap-2 py-2 active:cursor-grabbing lg:hidden"
>
  <div>
    <button
      onClick={(e) => { e.stopPropagation(); onTimeArrow(); }}
      className="flex ml-2 h-1 w-10 items-center justify-center text-cinder"
    >
      <IconArrow />
    </button>
  </div>
  <div className="flex gap-2 flex-row justify-between">
    <div className="h-1 w-4 rounded-full bg-gray-400"></div>
    <div className="h-1 w-10 rounded-full bg-black"></div>
    <div className="h-1 w-4 rounded-full bg-gray-400"></div>
  </div>
  <div>
    <button
      onClick={(e) => { e.stopPropagation(); onTimeClose(); }}
      className="flex mr-2 h-1 w-10 items-center justify-center text-cinder"
    >
      <IconCross />
    </button>
  </div>
</div>


<div className="hidden lg:flex px-8 pt-6 pb-2 items-center justify-between flex-shrink-0">
  <button
    onClick={onTimeArrow}
    className="flex items-center justify-center text-cinder"
  >
    <IconArrow />
  </button>
  <button
    onClick={onTimeClose}
    className="flex items-center justify-center text-cinder"
  >
    <IconCross />
  </button>
</div>


<div className="flex-1 overflow-y-auto px-8">
  <h2 className="mt-2 mb-6 text-2xl font-semibold text-cinder">
    Choose check-in time
  </h2>


          <div className="mb-4 flex flex-col gap-1">
            <span className="text-base font-medium text-cinder">
              Available time slots
            </span>
            <span className="text-sm font-medium text-mist">
              {formattedDate}
            </span>
          </div>


          <div className="flex mr- flex-col rounded-2xl border border-concrete overflow-hidden mb-6">
            {TIME_SLOTS.map((slot) => (
              <Button
                key={slot}
                onClick={() => setSelected(slot)}
                className="flex items-center justify-between border-b border-concrete px-4 py-4 last:border-0 hover:bg-concrete transition-colors"
              >
                <span className="text-base font-medium text-cinder">
                  {slot}
                </span>
                <div
                  className={`h-5 w-5 rounded-full border transition-colors ${
                    selected === slot
                      ? 'border-cinder bg-cinder'
                      : 'border-mist bg-white'
                  }`}
                />
              </Button>
            ))}
          </div>


          <Button className="flex h-11 w-full items-center justify-center rounded-pill bg-concrete text-sm font-medium text-cinder mb-6">
            Request custom time
          </Button>
        </div>


        <div className="px-8 py- flex-shrink-0 bg-white border-t border-concrete">
          <Button
            disabled={!selected}
            onClick={() => {
              onTimeNextClick?.(selected);
            }}
            className={`mb-4 transition-transform duration-200 hover:scale-105 h-12 w-full rounded-pill text-base font-medium ${
              selected
                ? 'bg-chartreuse text-cinder'
                : 'cursor-not-allowed bg-concrete text-mist'
            }`}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}


export default ChooseTime;



