import { useRef } from 'react';
import IconSuccess from '@/ui/IconSuccess';
import Button from '@/ui/Button';
import { useDragToClose } from '../../useDragToClose';
import { useState } from 'react';

function SuccessState({ onDone, onClose }) {
  const sheetRef = useRef(null);
  const dragHandle = useDragToClose(onClose, 80, sheetRef);
  const [isClosing, setIsClosing] = useState(false);
  const handleSmoothClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onDone();
    }, 300);
  };
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-end justify-end lg:items-center lg:justify-center lg:p-6">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleSmoothClose}
      />{' '}
      <div
        ref={sheetRef}
        className={`relative flex h-[810px] w-full max-h-[calc(100vh-42px)] flex-col overflow-hidden rounded-t-2xl bg-white lg:h-[760px] lg:w-[560px] lg:max-h-[calc(100vh-64px)] lg:rounded-2xl transition-transform duration-300 ease-in-out ${
          isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
    onPointerDown={dragHandle.onPointerDown}
  onClick={handleSmoothClose}
          className="flex cursor-grab touch-none flex-row justify-center gap-2 py-2 active:cursor-grabbing lg:hidden"
        >
       
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-5">
            <IconSuccess className="h-[164px] w-[164px]" />
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-center text-xl font-semibold leading-none text-cinder">
                Good job!
              </h3>
              <p className="text-center text-sm font-medium leading-relaxed text-mist">
                We'll notify you 5 minutes before it starts.
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-4 flex-shrink-0 bg-white border-t border-concrete w-full">
          <Button
            onClick={onDone}
            type="button"
            className="flex h-12 w-full items-center justify-center rounded-pill bg-chartreuse text-base font-medium leading-none text-cinder transition-transform duration-200 hover:scale-105"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SuccessState;
