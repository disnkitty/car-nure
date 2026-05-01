import { roomFeatures } from '@/ui/roomFeatures';
import Button from '@/ui/Button';

function RoomOffers({ obj }) {
  const activeFeatures = roomFeatures.filter(({ key }) => {
    const val = obj[key];
    return val !== false && val !== undefined;
  });

  return (
    <section className="flex flex-col gap-4 border-t border-concrete pt-4">
      <h2 className="text-base font-semibold leading-none text-cinder">
        What this room offers
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          {activeFeatures.map(({ key, label, icon: Icon }) => (
            <span
              key={key}
              className="inline-flex h-9 items-center gap-2 rounded-pill bg-white px-3 py-2"
            >
              <Icon size="sm" />
              <span className="text-sm font-normal leading-none text-cinder">
                {label(obj[key])}
              </span>
            </span>
          ))}
        </div>
        <Button className="mt-2 flex h-[38px] w-full items-center justify-center rounded-pill bg-concrete text-sm font-medium text-cinder">
          Show all {activeFeatures.length} amenities
        </Button>
      </div>
    </section>
  );
}

export default RoomOffers;
