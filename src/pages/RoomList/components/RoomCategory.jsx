import AllMeetingRooms from '@/features/rooms/components/AllMeetingRooms';
import RecommendedRooms from '@/features/rooms/components/RecommendedRooms';
import Button from '@/ui/Button';
function RoomCategory({ name, isActive, onSelect }) {
  return (
    <Button
      type="button"
      onClick={onSelect}
      className={`mb-2 transition-transform duration-200 hover:scale-110 mt-2 shrink-0 rounded-pill px-5 py-3 text-base font-normal leading-none transition-colors ${
        isActive ? 'bg-cinder text-white' : 'bg-white text-mist'
      }`}
    >
      {name}
    </Button>
  );
}

export default RoomCategory;
