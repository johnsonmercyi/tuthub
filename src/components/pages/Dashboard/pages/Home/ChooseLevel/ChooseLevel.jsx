import React, { useEffect, useRef, useState } from 'react';

import { MdArrowBack, MdSchool } from 'react-icons/md';
import Wrapper from '../../../../../../containers/Wrapper/Wrapper';
import ripple from '../../../../../../util/ripple.module.css';
import { animate } from '../../../../../../util/util';
import CustomIconButton from '../../../../../UI/Button/CustomIconButton/CustomIconButton';
import style from './ChooseLevel.module.css';

const ChooseLevel = ({ chooseLevelDialogHistoryHandler, dataLength, data=[], launch, levelClickHandler, styleClasses = [], customeStyle, ...props }) => {
  const selfRef = useRef(null);
  const shouldLoadComponent = useRef(true);
  const [historyIndex, setHostoryIndex] = useState(0);

  useEffect(() => {
    
    if (shouldLoadComponent.current) {
      shouldLoadComponent.current = false;
    }

    if (launch) {
      console.log("Launch: ", launch);
      animate(selfRef.current, 0, 100, 1, "ease-in-out", [
        { bottom: "-100%" },
        { bottom: "0" },
      ], () => {
        //on finish...
      })
    } else {
      animate(selfRef.current, 0, 200, 1, "ease-in-out", [
        { bottom: "-100%" },
      ], () => {
        //on finish...
      })
    }
  }, [launch]);

  const backButtonHandler = () => {
    chooseLevelDialogHistoryHandler();
  }
  
  return (
    <div className={[style.chooseLevel, ...styleClasses].join(" ")} style={customeStyle} ref={selfRef}>
      <div className={style.header}>
        <span className={style.backButton} onClick={backButtonHandler}><MdArrowBack /></span>
        <span className={style.title}>{"Academic Levels"}</span>
      </div>
      <Wrapper styleClass={[style.wrapper]}>
        <div className={style.levelsList}>
          {
            data.map((obj, index) => {
              return (
                <CustomIconButton
                  clickHandler={() => levelClickHandler(obj.id, obj.name, obj.type)}
                  styleClasses={[ripple.ripple, ripple.darkWaves]}
                  icon={<MdSchool />}
                  label={obj.name}
                  key={obj.name + "_" + index} />
              )
            })
          }
        </div>
      </Wrapper>
    </div>
  );
}

export default ChooseLevel;
