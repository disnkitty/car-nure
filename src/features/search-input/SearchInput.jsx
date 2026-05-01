import IconSearch from '@/ui/IconSearch';
import Filter from '@/features/filters/Filter';

function SearchInput({ onSearch }) {
  return (
    <div className="flex h-12 w-full items-center gap-3 rounded-pill bg-white px-3">
      <IconSearch className="shrink-0" />
      <input
        type="search"
        name="room-search"
        placeholder="Search meeting room…"
        className="min-w-0 flex-1 border-0 bg-transparent text-sm font-normal leading-[150%] text-cinder placeholder:text-mist focus:outline-none focus:ring-0"
        autoComplete="off"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Filter />
    </div>
  );
}

export default SearchInput;
