import Notifications from '@/features/notifications/Notifications';

function Header({ userName = 'Barbara' }) {
  return (
    <header className="flex items-start justify-between gap-4 px-4 pb-0 pt-6">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h1 className="text-base font-semibold leading-none text-cinder">
          Hey, {userName}!
        </h1>
        <p className="text-sm font-normal leading-[150%] text-mist">
          Your workspace is ready to book
        </p>
      </div>
      <Notifications />
    </header>
  );
}

export default Header;
