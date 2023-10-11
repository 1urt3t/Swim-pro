import Slider01 from "./block02/Slider01";
import Slider02 from "./block02/Slider02";
import Slider03 from "./block02/Slider03";
import Slider04 from "./block02/Slider04";
import '../../../media.css'

interface Block02Props {
  setActiveSlide: (active: string[]) => void;
  activeSlide: string[];
}

export default function Block02({setActiveSlide, activeSlide}: Block02Props) {

  return (
    <div className="block02">
      <Slider01 setActive={setActiveSlide} activeSlide={activeSlide}/>
      <Slider02 setActive={setActiveSlide} activeSlide={activeSlide}/>
      <div className="slider-row">
        <Slider03 setActive={setActiveSlide} activeSlide={activeSlide}/>
        <Slider04 setActive={setActiveSlide} activeSlide={activeSlide}/>
      </div>
    </div>
  );
}


