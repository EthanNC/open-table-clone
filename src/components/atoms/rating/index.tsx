import { ComponentType, SVGProps } from 'react';

interface RatingProps {
  numerator: number;
  denominator: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

function Rating({ Icon, numerator, denominator, className }: RatingProps) {
  const Icons = Array.from({ length: denominator }, (item, index) =>
    index < numerator ? (
      <Icon className={className} key={index} />
    ) : (
      <Icon className={`${className} fill-gray-300 `} key={index} />
    )
  );

  return <ul className='flex justify-center'>{Icons}</ul>;
}

export default Rating;
