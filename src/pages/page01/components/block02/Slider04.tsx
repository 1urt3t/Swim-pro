import Slider from 'react-slick';
import { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider01.css'

interface Slider04Props {
    setActive: (active: string[]) => void;
    activeSlide: string[]
  }

export default function Slider04({ setActive, activeSlide }: Slider04Props) {
    const [variants, setVariants] = useState(['50 м', '100 м', '200 м', '400 м', '800 м', '1500 м'])
    const [variantsId, setVariantsId] = useState(['D50m', 'D100m', 'D200m', 'D400m', 'D800m', 'D1500m'])
    const [check, setCheck] = useState(true)
    const [checkTwo, setCheckTwo] = useState(true)
    const [currentSlideT, setCurrentSlide] = useState(0)
    useEffect(() => {
        if (activeSlide[2] === 'backstroke' && JSON.stringify(variants) !== JSON.stringify(['50 м', '100 м', '200 м'])) {
            setVariants(['50 м', '100 м', '200 м'])
            setVariantsId(['D50m', 'D100m', 'D200m'])
        } else if (activeSlide[2] === 'brestroke' && JSON.stringify(variants) !== JSON.stringify(['50 м', '100 м', '200 м'])){
            setVariants(['50 м', '100 м', '200 м'])
            setVariantsId(['D50m', 'D100m', 'D200m'])
        } else if (activeSlide[2] === 'butterfly' && JSON.stringify(variants) !== JSON.stringify(['50 м', '100 м', '200 м'])) {
            setVariants(['50 м', '100 м', '200 м'])
            setVariantsId(['D50m', 'D100m', 'D200m'])
            setCheck(true)
            setCheckTwo(false)
        } else if (activeSlide[2] === 'freestyle' && JSON.stringify(variants) !== JSON.stringify(['50 м', '100 м', '200 м', '400 м', '800 м', '1500 м'])) {
            setVariants(['50 м', '100 м', '200 м', '400 м', '800 м', '1500 м'])
            setVariantsId(['D50m', 'D100m', 'D200m', 'D400m', 'D800m', 'D1500m'])
        } else if (activeSlide[2] === 'complex' && (JSON.stringify(variants) !== JSON.stringify(['100 м', '200 м', '400 м'] && JSON.stringify(variants) !== JSON.stringify(['200 м', '400 м'])))) {
            console.log(activeSlide)
            if (activeSlide[0] === 'fifty') {
                setVariants(['200 м', '400 м'])
                setVariantsId(['D200m', 'D400m'])
            } else if (activeSlide[0] === 'twentyfive'){
                setVariants(['100 м', '200 м', '400 м'])
                setVariantsId(['D100m', 'D200m', 'D400m'])
            }
            setCheck(false)
            setCheckTwo(true)
        }
    } , [activeSlide[0], activeSlide[2], variants, variantsId, check, checkTwo])


    if (check == false) {
        const updatedActiveSlide = [...activeSlide];
        updatedActiveSlide[1] = variantsId[currentSlideT];
        setActive(updatedActiveSlide);
        setCheck(true)
    }
    if (checkTwo == false) {
        const updatedActiveSlide = [...activeSlide];
        updatedActiveSlide[1] = variantsId[currentSlideT];
        setActive(updatedActiveSlide);
        setCheckTwo(true)
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (currentSlide: number) => {
            const updatedActiveSlide = [...activeSlide];
            updatedActiveSlide[1] = variantsId[currentSlide];
            setActive(updatedActiveSlide);
            setCurrentSlide(currentSlide)
          },
      };

    return (
        <div className='slider-container slider04'>
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