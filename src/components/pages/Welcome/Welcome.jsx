import React, { useEffect, useRef, useState } from 'react';

import style from './Welcome.module.css';
import * as util from '../../../util/util';
import Wrapper from '../../../containers/Wrapper/Wrapper';
import { useAppContext } from '../../../containers/AppContainer/AppContainer';
import { useNavigate } from 'react-router-dom';

const Welcome = (props) => {

  const { getLocalStorageData, setCourses, setLevels, setActiveSubLevel } = useAppContext();

  const navigate = useNavigate();
  const selfRef = useRef(null);
  const shouldLoadApp = useRef(false);

  const user = getLocalStorageData("user");

  /**
   * Component States
   */

  useEffect(()=> {
    if (shouldLoadApp) {
      shouldLoadApp.current = false;
      display();
    }
  }, []);

  const display = () => {
    util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: "0" },
      { opacity: "1" },
    ], () => {
      //load new page here...
      runProcessBeforeDashboard()
    });
  }

  const navigateToDashboard = () => {
    // console.log(state);
    setTimeout(() => {
      util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
        { opacity: "1" },
        { opacity: "0" },
      ], () => {
        //load new page here...
        navigate('/dashboard/home');
      });
    }, 0);
  }

  const runProcessBeforeDashboard = () => {
    //fake process
    setTimeout(() => {
      //navigate to dashboard here...
      navigateToDashboard();
    }, util.getRandomTime());
  }

  return (
    <div className={style.welcome} ref={selfRef}>
      <div className={style.imageContainer}></div>
      <Wrapper>
        <span className={style.welcomeText}>Welcome</span>
        <span className={style.username}>{user.name}</span>
        <span className={style.message}>We're preparing your dashboard...</span>
      </Wrapper>
    </div>
  );
}

export default Welcome;
