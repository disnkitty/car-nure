import Navigation from '@/features/navigation/Navigation';

function Footer() {
  return (
    <footer className="pointer-events-none fixed bottom-0 left-1/2 z-20 w-full max-w-[377px] -translate-x-1/2 px-4 pb-4 pt-2">
      <div className="pointer-events-auto flex justify-center">
        <Navigation />
      </div>
    </footer>
  );
}

export default Footer;
