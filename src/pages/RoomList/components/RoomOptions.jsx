import { useState } from 'react';
import RoomCategory from './RoomCategory';
import AllMeetingRooms from '@/features/rooms/components/AllMeetingRooms';
import RecommendedRooms from '@/features/rooms/components/RecommendedRooms';
const ROOM_CATEGORIES = [
  'All rooms',
  'Small (2-4)',
  'Medium (4-12)',
  'Large (12+)',
];

function RoomOptions({ searchQuery }) {
  const [active, setActive] = useState(ROOM_CATEGORIES[0]);

  return (
    <div className="flex flex-col gap-1">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ROOM_CATEGORIES.map((name) => (
          <RoomCategory
            key={name}
            name={name}
            isActive={active === name}
            onSelect={() => setActive(name)}
          />
        ))}
      </div>
      <RecommendedRooms activeCategory={active} searchQuery={searchQuery} />
      <AllMeetingRooms activeCategory={active} searchQuery={searchQuery} />
    </div>
  );
}

export default RoomOptions;
