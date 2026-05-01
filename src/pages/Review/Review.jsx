import { useRef } from 'react';
import { useRooms } from '@/context/RoomsContext';
import ReviewRoomCard from '@/features/rooms/components/ReviewRoomCard';
import Button from '@/ui/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import IconArrow from '@/ui/IconArrow';
import IconCross from '@/ui/IconCross';
import { useDragToClose } from '@/useDragToClose';
import { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { database } from '@/firebase';

function Review({
  onReviewClose,
  onReviewArrow,
  selectedDate,
  selectedTime,
  onBookFreeNow,
  onChangeDateClick,
  onDetailsClick,
}) {
  const { rooms, loading, error } = useRooms();
  const { id } = useParams();
  const sheetRef = useRef(null);
  const dragHandle = useDragToClose(onReviewClose, 80, sheetRef);

  const handleBookFreeNow = async () => {
    await saveBooking(room.id, selectedDate, selectedTime);
    if (!bookingError) {
      onBookFreeNow();
    }
  };
  const room = rooms.find((r) => r.id === Number(id)) || rooms[0];
  const [isClosing, setIsClosing] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  const handleSmoothClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onReviewClose();
    }, 300);
  };

  const saveBooking = async (roomId, date, time) => {
    try {
      setBookingError(null);
      const bookingsRef = ref(database, 'bookings');
      const newBookingRef = push(bookingsRef);
      await set(newBookingRef, {
        roomId,
        date,
        time,
        timestamp: new Date().toISOString(),
      });
      console.log('Бронирование сохранено:', { roomId, date, time });
    } catch (error) {
      console.error('Ошибка сохранения бронирования:', error);
    }
  };
  const handleDetailsChange = () => {
    setIsClosing(true);
    setTimeout(() => {
      onDetailsClick();
    }, 300);
  };

  const handleDateChange = () => {
    setIsClosing(true);
    setTimeout(() => {
      onChangeDateClick();
    }, 300);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">Загрузка...</div>
    );
  }

  if (error || !room) {
    return (
      <div className="flex justify-center items-center h-full">
        Ошибка: {error || 'Комната не найдена'}
      </div>
    );
  }
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
              onClick={(e) => {
                e.stopPropagation();
                onReviewArrow();
              }}
              className="flex ml-2 h-1 w-10 items-center justify-center text-cinder"
            >
              <IconArrow />
            </button>
          </div>
          <div className="flex gap-2 flex-row justify-between">
            <div className="h-1 w-4 rounded-full bg-gray-400"></div>
            <div className="h-1 w-4 rounded-full bg-gray-400"></div>
            <div className="h-1 w-10 rounded-full bg-black"></div>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReviewClose();
              }}
              className="flex mr-2 h-1 w-10 items-center justify-center text-cinder"
            >
              <IconCross />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex px-8 pt-6 pb-2 items-center justify-between flex-shrink-0">
          <button
            onClick={onReviewArrow}
            className="flex items-center justify-center text-cinder"
          >
            <IconArrow />
          </button>
          <button
            onClick={onReviewClose}
            className="flex items-center justify-center text-cinder"
          >
            <IconCross />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8">
          <ReviewRoomCard
            obj={room}
            id={id}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onChangeDateClick={handleDateChange}
            onDetailsClick={handleDetailsChange}
          />
        </div>

        <div className="px-8 py-4 flex-shrink-0 bg-white border-t border-concrete">
          <Button
            onClick={handleBookFreeNow}
            className="transition-transform duration-200 hover:scale-105 w-full flex items-center justify-center h-12 bg-chartreuse rounded-pill text-base font-medium leading-none text-cinder"
          >
            Book Free Now
          </Button>
          {bookingError && (
            <div className="text-red-500 mt-2">{bookingError}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Review;
