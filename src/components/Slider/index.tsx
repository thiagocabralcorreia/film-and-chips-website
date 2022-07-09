import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { SliderContainer } from './styles';

interface CarouselProps {
  children: JSX.Element[] | JSX.Element | undefined
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 8,
    slidesToSlide: 8
  },
  laptop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 7,
    slidesToSlide: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 6,
    slidesToSlide: 6
  },
  mobileLarger: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
    slidesToSlid: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
};

export const Slider = ({ children }: CarouselProps) => {
  return (
    <SliderContainer>
      <Carousel
        responsive={responsive}
        keyBoardControl={true}
      >
        {children}
      </Carousel>
    </SliderContainer>
  )
};
