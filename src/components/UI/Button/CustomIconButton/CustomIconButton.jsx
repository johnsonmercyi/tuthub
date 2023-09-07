import React from 'react';

import style from './CustomIconButton.module.css';

const CustomIconButton = ({icon, label, value, clickHandler, styleClasses=[], customStyle, ...props}) => {
  return (
    <div className={[style.customIconButton, ...styleClasses].join(" ")} style={customStyle} onClick={clickHandler}>
      <div className={style.image}>
        {icon}
      </div>
      <span className={style.label}>{label && label}</span>
    </div>
  );
}

export default CustomIconButton;
