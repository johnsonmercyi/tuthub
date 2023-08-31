import React from 'react';

import style from './TitleListContainer.module.css';

const TitleListContainer = ({title, customStyle, styleClasses=[], ...props}) => {
  return (
    <div className={[style.titleListContainer, ...styleClasses].join(" ")} style={customStyle}>
      <span className={style.title}>{title && title}</span>
      <div className={style.listContainer}>
        {props.children}
      </div>
    </div>
  );
}

export default TitleListContainer;
