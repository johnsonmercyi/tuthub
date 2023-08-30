import React, { useEffect, useRef } from 'react';

import style from './Slide.module.css';
import { setElementStyle } from '../../../../util/util';

const Slide = ({image, imageSize, name, header, contentText, buttonText, clickHandler, ...props}) => {
  const imageRef = useRef(null);

  useEffect(()=> {
    if (imageRef.current) {
      setElementStyle(imageRef.current, "background-image", `url(${image})`);
      setElementStyle(imageRef.current, "background-size", imageSize);
    }
  });
  return (
    <div className={style.slide}>
      <div className={style.content}>
        <span className={style.header}>{header || null}</span>
        <span className={style.contentText}>{contentText || null}</span>
        <div className={style.buttonWrapper}>
          <span className={style.button} onClick={clickHandler}>{buttonText || null}</span>
        </div>
      </div>
      <div className={style.image} ref={imageRef}></div>
    </div>
  );
}

export default Slide;
