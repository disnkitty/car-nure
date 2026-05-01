import Cross from '../assets/icons/Name=Cross.svg?react';

const sizeClass = {
  md: '[&>svg]:h-6 [&>svg]:w-6',
  sm: '[&>svg]:h-4 [&>svg]:w-4',
};

function IconCross({ className = '', size = 'md' }) {
  return (
    <span
      className={`inline-flex shrink-0 text-cinder ${sizeClass[size]} ${className}`}
      role="presentation"
    >
      <Cross />
    </span>
  );
}

export default IconCross;
