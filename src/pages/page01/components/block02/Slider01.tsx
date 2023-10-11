import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider01.css";
import '../../../../media.css'

interface Slider01Props {
  setActive: (active: string[]) => void;
  activeSlide: string[];
}

export default function Slider01({ setActive, activeSlide}: Slider01Props) {
  const variants = ["Бассейн 25м", "Бассейн 50м"];
  const variantsId = ['twentyfive', 'fifty']
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: number) => {
      const updatedActiveSlide = [...activeSlide];
      updatedActiveSlide[0] = variantsId[currentSlide];
      setActive(updatedActiveSlide);
    },
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        {variants.map((variant, index) => (
          <div key={index} className="slide">
            <p>{variant}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}



