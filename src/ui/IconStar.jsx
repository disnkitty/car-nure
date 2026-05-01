import Star from '../assets/icons/Name=Star.svg?react';

const sizeClass = {
  md: '[&>svg]:h-6 [&>svg]:w-6',
  sm: '[&>svg]:h-4 [&>svg]:w-4',
};

function IconStar({ className = '', size = 'md', variant = 'default' }) {
  const ratingFill =
    variant === 'rating' ? '[&_path]:fill-orange [&_path]:stroke-none' : '';

  return (
    <span
      className={`inline-flex shrink-0 text-cinder ${sizeClass[size]} ${ratingFill} ${className}`}
      role="presentation"
    >
      <Star />
    </span>
  );
}

export default IconStar;
