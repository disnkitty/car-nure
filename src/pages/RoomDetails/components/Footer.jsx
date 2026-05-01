import Button from '@/ui/Button';
import { Link } from 'react-router-dom';

function Footer({ obj, onBookClick }) {
  return (
    <div className=" bottom-10 left-0 right-0 flex items-center justify-between bg-white px-4 py-4 shadow-card ">
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-normal text-mist">Price</span>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-semibold text-cinder">
            ${obj?.price}
          </span>
          <span className="text-sm text-mist">/hour</span>
        </div>
      </div>
      
        <Button onClick={onBookClick} className="h-12 w-[200px] transition-transform duration-200 hover:scale-105 rounded-pill bg-chartreuse text-base font-medium text-cinder">
          Book Now 
        </Button>
     
    </div>
  );
}

export default Footer;
