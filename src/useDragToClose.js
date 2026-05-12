import { useCallback } from 'react';

function useDragToClose(onClose, threshold = 80) {
  const onPointerDown = useCallback(
    (event) => {
      const startY = event.clientY;
      let isDragging = true;

      const onPointerMove = (moveEvent) => {
        if (!isDragging) return;
        const deltaY = moveEvent.clientY - startY;
        if (deltaY > threshold) {
          isDragging = false;
          onClose?.();
          cleanup();
        }
      };

      const onPointerUp = () => {
        isDragging = false;
        cleanup();
      };

      const cleanup = () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
    },
    [onClose, threshold],
  );

  return { onPointerDown };
}

export default useDragToClose;
