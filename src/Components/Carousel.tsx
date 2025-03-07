import { Carousel as MaterialTailwindCarousel } from '@material-tailwind/react';
import { IImage } from '../types/product';

interface ICarousel {
  images: IImage[];
}

export function Carousel({ images }: ICarousel) {
  return (
    <MaterialTailwindCarousel
      className='rounded-xl [&_button]:text-black'
      autoplay={true} // Enables automatic sliding
      loop={true} // Enables infinite looping
      //   interval={3000} // Sets the time interval for sliding (in milliseconds)
      
    >
      { images.map((image) => (
        <div className='relative'>
          <img
            key={image._id}
            src={image.url}
            alt='image 1'
            className='w-full object-contain h-80' 
          />
          
        </div>
      ))}
    </MaterialTailwindCarousel>
  );
}
