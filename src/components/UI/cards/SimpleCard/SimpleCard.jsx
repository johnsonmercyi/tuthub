import React from 'react';

import style from './SimpleCard.module.css';

const SimpleCard = ({ image, title, customStyle, styleClasses = [], ...props}) => {
  return (
    <div className={[style.simpleCard, ...styleClasses].join(" ")}>
      <div className={style.image}>{image}</div>
      <span className={style.title}>{title && title}</span>
    </div>
  );
}

export default SimpleCard;
