import IconOffice from '@/ui/IconOffice';
function Location({ obj }) {
  return (
    <section className="flex flex-col gap-4 border-t border-concrete pt-4">
      <h2 className="text-base font-semibold leading-none text-cinder">
        Where you'll be
      </h2>
      <p className="text-sm font-normal leading-relaxed text-cinder">
        {obj?.address}
      </p>
      <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden rounded-2xl bg-concrete">
        <img
          src="/location.svg"
          alt="location map"
          className="h-full w-full object-cover"
        />
        <button className="absolute flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#EAFF00] text-white">
          <IconOffice className=" h-7 w-7  invert" />
        </button>
      </div>
    </section>
  );
}

export default Location;
