import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider01.css'

interface Slider02Props {
    setActive: (active: string[]) => void;
    activeSlide: string[]
  }

export default function Slider02({ setActive, activeSlide }: Slider02Props) {
    const variants = ['Вольный стиль', 'На спине', 'Брасс', 'Баттерфляй', 'Комплекс']
    const variantsId = ['freestyle', 'backstroke', 'brestroke', 'butterfly', 'complex']

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (currentSlide: number) => {
            const updatedActiveSlide = [...activeSlide];
            updatedActiveSlide[2] = variantsId[currentSlide];
            setActive(updatedActiveSlide);
          },
      };
    return (
        <div className='slider-container slider02'>
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
