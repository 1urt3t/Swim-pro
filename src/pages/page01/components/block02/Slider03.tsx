import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider01.css'

interface Slider03Props {
    setActive: (active: string[]) => void;
    activeSlide: string[]
  }

export default function Slider03({ setActive, activeSlide }: Slider03Props) {
    const variants = ['Муж. пол', 'Жен. пол']
    const variantsId = ['m', 'f']

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (currentSlide: number) => {
            const updatedActiveSlide = [...activeSlide];
            updatedActiveSlide[3] = variantsId[currentSlide];
            setActive(updatedActiveSlide);
          },
      };
    return (
        <div className='slider-container slider03'>
            <Slider {...settings} className='slider'>
                {variants.map((variant, index) => (
                    <div key={index} className='slide'>
                        <p>{variant}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}