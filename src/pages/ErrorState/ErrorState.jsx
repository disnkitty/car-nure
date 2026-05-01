import IconError from '@/ui/IconError';
import Button from '@/ui/Button';
import { useNavigate } from 'react-router-dom';

function ErrorState({onDone}) {
  const navigate = useNavigate();

  return (
    <div className="py-10 flex min-h-screen w-full items-center justify-center bg-[#F2F2F2] px-4">
      <div className="flex w-full max-w-[600px] flex-col items-center rounded-2xl bg-white px-8 py-8 gap-8">
        <div className="flex flex-col items-center justify-center gap-5">
          <IconError className="w-[164px] h-[164px]" />
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold leading-none text-center text-cinder">
              Something went wrong
            </h3>
            <p className="text-sm font-medium leading-relaxed text-center text-mist">
              We couldn't complete your booking.
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate('/')}
          type="button"
          className="transition-transform duration-200 hover:scale-105 w-full flex items-center justify-center h-12 bg-chartreuse rounded-pill text-base font-medium leading-none text-cinder"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorState;
