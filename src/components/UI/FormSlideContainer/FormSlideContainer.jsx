import React from 'react';

import style from './FormSlideContainer.module.css';

const FormSlideContainer = ({ slideRef, styleClasses=[], ...props }) => {
  return (
    <div className={[style.formSlideContainer, ...styleClasses].join(" ")} ref={slideRef}>
      {
        props.children
      }
    </div>
  );
}

export default FormSlideContainer;
