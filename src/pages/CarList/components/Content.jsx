import SearchInput from '@/features/search-input/SearchInput';
import CarOptions from './CarOptions';
import { useState } from 'react';

function Content() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="flex flex-1 flex-col gap-3 px-4 pb-[90px] pt-4">
      <div className="flex flex-col gap-3">
        <SearchInput onSearch={setSearchQuery} />
        <CarOptions searchQuery={searchQuery} />
      </div>
    </main>
  );
}

export default Content;
