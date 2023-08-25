import React, { useEffect, useRef } from 'react';

import style from './TextField.module.css';
import { animate } from '../../../util/util';
import { ioIcons } from '../../../util/icons';

const TextField = ({ toggled, toggledhandler, icon, fieldRef, fieldContainerRef, isError, errorText, type, name, value, placeHolder, onInputChangeHandler, customStyle, ...props }) => {
  const shouldLoadApp = useRef(true);
  const errorRef = useRef(null);

  useEffect(() => {
    console.log("Toggled: ", toggled);
    if (shouldLoadApp.current) {
      console.log("Splash screen!");
      shouldLoadApp.current = false;

      if (isError) {
        errorRef.current = errorText;
        animate(errorRef.current, 0, 500, 1, "ease-in-out", [
          { opacity: "0" },
          { opacity: "1" },
        ]);
      }
    }

    return () => {

    }
  }, [isError, toggled]);

  function getFieldType () {
    let newType = type;
    if (type === "password") {
      if (toggled) {
        newType = "text";
      }
    }
    return newType;
  }

  return (
    <div className={style.textFieldWrapper}>
      <div className={style.wrapper} ref={fieldContainerRef}>
        <span className={style.icon}>{icon}</span>
        <input
          ref={fieldRef}
          type={getFieldType()}
          name={name}
          id={name}
          className={style.textField}
          value={value}
          placeholder={placeHolder}
          onChange={onInputChangeHandler}
          style={customStyle} />
        {
          type === "password" ?
            <span
              className={[style.icon, style.hidePasswordToggleBtn].join(" ")}
              onClick={toggledhandler}>
                {toggled ? <ioIcons.IoEye /> : <ioIcons.IoEyeOff />}
            </span> : null
        }
      </div>

      <span className={style.errorText} ref={errorRef}>{errorText}</span>
    </div>
  );
}

export default TextField;
