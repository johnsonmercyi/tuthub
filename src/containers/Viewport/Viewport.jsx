import React from 'react';

import style from './Viewport.module.css';

const Viewport = (props) => {
  return (
    <div className={style.viewport}>
      {props.children}
    </div>
  );
}

export default Viewport;
