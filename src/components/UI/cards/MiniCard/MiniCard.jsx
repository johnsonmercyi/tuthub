import React, { useEffect, useRef } from 'react';

import style from './MiniCard.module.css';
import ripple from '../../../../util/ripple.module.css';

const MiniCard = ({ title, content, image, onClickHandler, ...props }) => {
  const selfRef = useRef(null);

  useEffect(() => {
    if (selfRef.current) {
      selfRef.current.style.backgroundImage = `url(${image})`;
    }
  });

  return (
    <div
      className={[style.miniCard, ripple.ripple, ripple.darkWaves].join(" ")}
      ref={selfRef}
      onClick={onClickHandler}>
      <span className={style.title}>{title && title}</span>
      <span className={style.content}>{content && content}</span>
      <span className={style.bgImage}>{image && image}</span>
    </div>
  );
}

export default MiniCard;
