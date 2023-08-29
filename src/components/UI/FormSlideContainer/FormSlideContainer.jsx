import React from 'react';

import style from './FormSlideContainer.module.css';

const FormSlideContainer = ({ slideRef, styleClasses=[], customStyle, ...props }) => {
  return (
    <div className={[style.formSlideContainer, ...styleClasses].join(" ")} ref={slideRef} style={customStyle}>
      {
        props.children
      }
    </div>
  );
}

export default FormSlideContainer;
