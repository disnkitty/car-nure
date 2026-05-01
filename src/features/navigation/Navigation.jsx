import { useState } from 'react';
import IconHouse from '@/ui/IconHouse';
import IconSearch from '@/ui/IconSearch';
import IconLike from '@/ui/IconLike';
import IconPerson from '@/ui/IconPerson';

const TABS = [
  { id: 'home', label: 'Home', Icon: IconHouse },
  { id: 'search', label: 'Search', Icon: IconSearch },
  { id: 'favorites', label: 'Favorites', Icon: IconLike },
  { id: 'profile', label: 'Profile', Icon: IconPerson },
];

function Navigation() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav
      className="flex w-full max-w-[345px] items-center justify-between gap-1 rounded-pill bg-white px-2 py-2 shadow-nav"
      aria-label="Main"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const { Icon } = tab;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex h-11 items-center justify-center rounded-pill transition-all duration-300 ${
              isActive
                ? 'gap-2 bg-cinder px-5 text-white [&_path]:fill-white'
                : 'w-11 text-cinder [&_path]:fill-cinder'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size="md" />
            {isActive && (
              <span className="whitespace-nowrap text-base font-medium leading-none">
                {tab.label}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}

export default Navigation;
