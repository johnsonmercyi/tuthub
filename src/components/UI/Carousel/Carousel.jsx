import React, { useEffect, useRef } from 'react';

import style from './Carousel.module.css';
import Slide from './Slide/Slide';
import { animate } from '../../../util/util';

const Carousel = ({ slides = [], transitionDelay=5000, ...props }) => {
  console.log("Length: ", slides.length);
  const slidesContainerRef = useRef(null);
  const dotRefs = [];

  useEffect(() => {
    if (slidesContainerRef.current) {
      //set the width of the slides container
      slidesContainerRef.current.style.width = `${100 * slides.length}%`;
      dotRefs[0].current.style.backgroundColor = "orange";
      startSlide();
    }
  }, [slides.length]);

  function startSlide() {
    let count = 0;
    let initWidth = 0;

    setInterval(() => {
      if (count < slides.length) {
        if (count + 1 === slides.length) {
          count = 0;
          initWidth = 0;
          animate(slidesContainerRef.current, 0, 500, 1, "ease-in-out", [
            { transform: `translateX(${initWidth}vw)` },
          ], ()=> {
            let track = slides.length - 1;
            let interval = setInterval(()=> {
              if (track > 0 ) {
                animate(dotRefs[track--].current, 0, 100, 1, "ease-in-out", [
                  { backgroundColor: `orange` },
                  { backgroundColor: `white` },
                ]);
              } else {
                animate(dotRefs[count].current, 0, 100, 1, "ease-in-out", [
                  { backgroundColor: `white` },
                  { backgroundColor: `orange` },
                ]);
                clearInterval(interval);
              }
            }, 40);
            
          }, 1);
        } else {
          animate(slidesContainerRef.current, 0, 500, 1, "ease-in-out", [
            { transform: `translateX(${initWidth}vw)` },
            { transform: `translateX(${initWidth - 95}vw)` },
          ], ()=> {
            animate(dotRefs[count].current, 0, 500, 1, "ease-in-out", [
              { backgroundColor: `white` },
              { backgroundColor: `orange` },
            ], ()=> {
              animate(dotRefs[count - 1].current, 0, 500, 1, "ease-in-out", [
                { backgroundColor: `orange` },
                { backgroundColor: `white` },
              ]);
            }, 1);
          }, 1);

          count++;
          initWidth -= 95;
        }
      }
    }, transitionDelay);
  }

  return (
    <div className={style.carousel}>
      <div className={style.slides} ref={slidesContainerRef}>
        {
          slides.map((slide, index) => {
            return (
              <Slide
                key={slide.name + "_" + index}
                header={slide.header}
                buttonText={slide.buttonText}
                contentText={slide.contentText}
                image={slide.image}
                imageSize={slide.imageSize}
                clickHandler={null} />
            );
          })
        }
      </div>
      <div className={[style.control, style.dots].join(" ")}>
        {/* The number of dots here depends on the number slides */}
        {
          slides.map((slide, index) => {
            dotRefs.push(slide.dotRef);
            return (
              <div className={style.dot} ref={slide.dotRef}></div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Carousel;
