import House from '../assets/icons/Name=House.svg?react';

const sizeClass = {
  md: '[&>svg]:h-6 [&>svg]:w-6',
  sm: '[&>svg]:h-4 [&>svg]:w-4',
};

function IconHouse({ className = '', size = 'md' }) {
  return (
    <span
      className={`inline-flex shrink-0 text-cinder ${sizeClass[size]} ${className}`}
      role="presentation"
    >
      <House />
    </span>
  );
}

export default IconHouse;
