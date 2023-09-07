import React from 'react';

import style from './SimpleCard.module.css';
import ripple from '../../../../util/ripple.module.css';

const SimpleCard = ({ image, title, customStyle, styleClasses = [], ...props}) => {
  return (
    <div 
      className={[style.simpleCard, ripple.ripple, ripple.darkWaves, ...styleClasses].join(" ")}
      style={customStyle}>
      <div className={style.image}>{image}</div>
      <span className={style.title}>{title && title}</span>
    </div>
  );
}

export default SimpleCard;
