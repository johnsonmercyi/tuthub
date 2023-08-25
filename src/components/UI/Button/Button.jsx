import React from 'react';

import style from './Button.module.css';
import ripple from '../../../util/ripple.module.css';
import googleImage from '../../../resources/images/social.png';

const Button = ({ custom, clickWave, text, onClickhandler, customStyle, styleClasses=[], ...props }) => {
  return (
    <div className={[style.buttonWrapper].join(" ")}>
      {
        custom ?
          <div 
            className={[style.button, style.custom, styleClasses.join(","), ripple.ripple, ripple[!clickWave ? "lightWaves" : clickWave]].join(" ")} 
            onClick={onClickhandler}
            style={customStyle}>
              <span className={style.text}>{text}</span>
              <div className={style.image}>
                <img src={googleImage} alt="Google Logo" />
              </div>   
          </div> :
        <button
          className={[style.button, styleClasses.join(","), ripple.ripple, ripple[!clickWave ? "lightWaves" : clickWave]].join(" ")}
          type="button"
          onClick={onClickhandler}
          style={customStyle}>{text}</button>
      }
    </div>
  );
}

export default Button;
