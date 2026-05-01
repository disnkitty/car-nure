import { useCars } from '@/context/CarsContext';
import ChooseDates from '@/pages/ChooseDates/ChooseDates';
import ChooseTime from '@/pages/ChooseTime/ChooseTime';
import Review from '@/pages/Review/Review';
import SuccessState from '@/pages/SuccessState/SuccessState';
import { useSearchParams } from 'react-router-dom';
import Content from './components/Content';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function CarDetails() {
  const { cars } = useCars();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [modal, setModal] = useState(() => searchParams.get('startModal') ?? null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  if (cars.length === 0) {
    return <div>Loading...</div>;
  }

  const car = cars.find((item) => item.id.toString() === id);
  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-alabaster">
      <Content obj={car} />
      <Footer
        obj={car}
        onBookClick={() => setModal('date')}
        onBookSwipe={() => setModal(null)}
      />
      {modal === 'date' && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute bottom-0 left-0 right-0">
            <ChooseDates
              onDateNextClick={(date) => {
                setModal('time');
                setSelectedDate(date);
              }}
              onDateClose={() => setModal(null)}
            />
          </div>
        </div>
      )}
      {modal === 'time' && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute bottom-0 left-0 right-0">
            <ChooseTime
              onTimeNextClick={(time) => {
                setModal('review');
                setSelectedTime(time);
              }}
              onTimeClose={() => setModal(null)}
              onTimeArrow={() => setModal('date')}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      )}
      {modal === 'review' && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div className="absolute bottom-0 left-0 right-0">
            <Review
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onBookFreeNow={() => setModal('success')}
              onReviewClose={() => setModal(null)}
              onReviewArrow={() => setModal('time')}
              onChangeDateClick={() => setModal('date')}
              onDetailsClick={() => setModal(null)}
            />
          </div>
        </div>
      )}
      {modal === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <SuccessState onDone={() => setModal(null)} />
        </div>
      )}
    </div>
  );
}

export default CarDetails;
