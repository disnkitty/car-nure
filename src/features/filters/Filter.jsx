import IconFilter from '@/ui/IconFilter';

function Filter() {
  return (
    <button
      type="button"
      aria-label="Filter meeting rooms"
      className="inline-flex shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-0 text-cinder"
    >
      <IconFilter className="shrink-0" />
    </button>
  );
}

export default Filter;
