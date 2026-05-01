import { useRef } from 'react';

export function useDragToClose(onClose, threshold = 80, sheetRef = null) {
  const startY = useRef(null);
  const isDragging = useRef(false);
  const closeTimeout = useRef(null);

  const resetTransform = (sheet, animated = true) => {
    if (!sheet) return;
    if (animated) {
      sheet.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      sheet.style.transition = 'none';
    }
    sheet.style.transform = 'translateY(0)';
  };

  const onPointerDown = (e) => {
    if (!sheetRef?.current) return;
    if (window.matchMedia('(min-width: 1024px)').matches) return;

    startY.current = e.touches?.[0]?.clientY ?? e.clientY;
    isDragging.current = true;
    const sheet = sheetRef.current;
    sheet.style.transition = 'none';

    const handlePointerMove = (ev) => {
      if (!isDragging.current || startY.current === null) return;

      const currentY = ev.touches?.[0]?.clientY ?? ev.clientY;
      const delta = currentY - startY.current;

      // Only allow dragging downward
      if (delta > 0) {
        sheet.style.transform = `translateY(${delta}px)`;
      }
    };

    const handlePointerEnd = (ev) => {
      if (!isDragging.current || startY.current === null) return;

      const endY = ev.changedTouches?.[0]?.clientY ?? ev.clientY;
      const delta = endY - startY.current;

      isDragging.current = false;
      startY.current = null;

      if (delta > threshold) {
        // Close the sheet
        sheet.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        sheet.style.transform = `translateY(${window.innerHeight}px)`;
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        closeTimeout.current = setTimeout(onClose, 300);
      } else {
        // Snap back
        resetTransform(sheet, true);
      }

      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerEnd);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerEnd);
    };

    if (e.touches) {
      window.addEventListener('touchmove', handlePointerMove, {
        passive: true,
      });
      window.addEventListener('touchend', handlePointerEnd);
    } else {
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerEnd);
    }
  };

  return { onPointerDown };
}
