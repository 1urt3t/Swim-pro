import './results.css'
import '../../media.css'
import Block01 from './components/Block01'
import Block02 from './components/Block02'
import category from './components/category';
import get from 'lodash.get'
import { useEffect, useState } from 'react';


export default function Results() {
  const [activeSlide, setActiveSlide] = useState<string[]>(['twentyfive', 'D50m', 'freestyle', 'm']);
  const [dynamicPath, setDynamicPath] = useState<string>(activeSlide.join('.'))
  const [a, setA] = useState<any>(get(category, dynamicPath))

  useEffect(() => {
    setDynamicPath(activeSlide.join('.'))
  }, [activeSlide])
  useEffect(() => {
    setA(get(category, dynamicPath))
  }, [dynamicPath])



  return (
    <div className='results'>
      <Block01 a={a}/>
      <Block02 activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
    </div>
  )
}
