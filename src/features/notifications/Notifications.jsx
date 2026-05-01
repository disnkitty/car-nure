import IconBell from '@/ui/IconBell';
import Button from '@/ui/Button';

function Notifications() {
  return (
    <Button
      type="button"
      aria-label="Notifications"
      className="transition-transform duration-200 hover:scale-125 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
    >
      <IconBell className="shrink-0" />
    </Button>
  );
}

export default Notifications;
