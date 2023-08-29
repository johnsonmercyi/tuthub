import React from 'react';

import style from './Wrapper.module.css';

const Wrapper = ({styleClass=[], customStyle, wrapperRef, ...props}) => {
  return (
    <div className={[style.wrapper, ...styleClass].join(" ")} style={customStyle} ref={wrapperRef}>
      {props.children}
    </div>
  );
}

export default Wrapper;
