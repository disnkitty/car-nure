import { useState, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import IconCross from '@/ui/IconCross';
import { useDragToClose } from '../../useDragToClose';


const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];


function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  return { daysInMonth, startOffset };
}


function CalendarMonth({ year, month, selected, onSelect, today }) {
  const { daysInMonth, startOffset } = getMonthDays(year, month);
  const monthName = new Date(year, month).toLocaleString('en', {
    month: 'long',
  });


  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);


  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-base font-medium text-cinder">
        {monthName} {year}
      </h3>
      <div className="grid grid-cols-7">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} className="h-[52px]" />;


          const date = new Date(year, month, day);
          const isPast = date < today;
          const isSelected =
            selected &&
            selected.getDate() === day &&
            selected.getMonth() === month &&
            selected.getFullYear() === year;


          return (
            <button
              key={day}
              disabled={isPast}
              onClick={() => onSelect(date)}
              className={`flex h-[52px] w-full items-center justify-center text-base font-medium transition-colors
                ${isSelected ? 'rounded-full bg-cinder text-white' : ''}
                ${isPast ? 'text-mist line-through cursor-not-allowed' : 'text-cinder'}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}


function ChooseDates({ onNext, onDateNextClick, onDateClose }) {
  const sheetRef = useRef(null);
  const dragHandle = useDragToClose(onDateClose, 80, sheetRef);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [isClosing, setIsClosing] = useState(false);
  const handleSmoothClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onDateClose();
    }, 300);
  };
  const [selected, setSelected] = useState(null);


  const months = [
    { year: today.getFullYear(), month: today.getMonth() },
    {
      year:
        today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear(),
      month: today.getMonth() === 11 ? 0 : today.getMonth() + 1,
    },
  ];


  return (
    <div className="fixed inset-0 z-50 flex flex-col items-end justify-end lg:items-center lg:justify-center lg:p-6">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={onDateClose}
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
            <div className="flex ml-2 h-1 w-10"></div>
          </div>


          <div className="flex gap-2 flex-row justify-between">
            <div className="h-1 w-10 rounded-full bg-black"></div>
            <div className="h-1 w-4 rounded-full bg-gray-400"></div>
            <div className="h-1 w-4 rounded-full bg-gray-400"></div>
          </div>


          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDateClose();
              }}
              className="flex mr-2 h-1 w-10 items-center justify-center text-cinder"
            >
              <IconCross />
            </button>
          </div>
        </div>


   
        <div className="hidden lg:flex px-8 pt-6 pb-2 items-center justify-end flex-shrink-0">
          <button
            onClick={onDateClose}
            className="flex items-center justify-center text-cinder"
          >
            <IconCross />
          </button>
        </div>


        <div className="flex-1 overflow-y-auto px-8">
          <h2 className="mt-2 mb-6 text-2xl font-semibold text-cinder">
            Choose dates
          </h2>


          <div className="grid grid-cols-7 border-y border-concrete py-2 mb-4">
            {DAYS.map((d, i) => (
              <span
                key={i}
                className="flex h-12 items-center justify-center text-sm font-medium text-mist"
              >
                {d}
              </span>
            ))}
          </div>


          <div className="flex flex-col gap-6">
            {months.map(({ year, month }) => (
              <CalendarMonth
                key={`${year}-${month}`}
                year={year}
                month={month}
                selected={selected}
                onSelect={setSelected}
                today={today}
              />
            ))}
          </div>
        </div>


        <div className="px-8 py-4 flex-shrink-0 bg-white border-t border-concrete">
          <button
            disabled={!selected}
            onClick={() => {
              onDateNextClick?.(selected);
            }}
            className={`h-12 w-full transition-transform duration-200 hover:scale-105 rounded-pill text-base font-medium ${
              selected
                ? 'bg-chartreuse text-cinder'
                : 'bg-concrete text-mist cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}


export default ChooseDates;








