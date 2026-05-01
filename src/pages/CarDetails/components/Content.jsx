import FullDetailCar from '@/features/cars/components/FullDetailCar';

function Content({ obj }) {
  return (
    <div className="flex flex-col">
      <FullDetailCar obj={obj} />
    </div>
  );
}

export default Content;
