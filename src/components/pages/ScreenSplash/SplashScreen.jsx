import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './SplashScreen.module.css';
import * as util from '../../../util/util';

const SplashScreen = () => {
  const shouldLoadApp = useRef(true);
  const selfRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderTextRef = useRef(null);

  const navigate = useNavigate();

  useEffect(()=> {
    if (shouldLoadApp.current) {
      console.log("Splash screen!");
      shouldLoadApp.current = false;
      spinLoader();
    }
  }, []);

  const spinLoader = () => {
    util.animate(loaderRef.current, 0, 1000, Infinity, "ease-in-out", [
      {transform: "rotate(360deg)"}
    ], ()=> {
      loaderTextRef.current.innerHTML = util.greet();
      util.animate(loaderTextRef.current, 0, 1000, 1, "ease-in-out", [
        { opacity: "0", top: "15vw" },
        { opacity: "1", top: "20vw" },
      ], ()=> {
        navigateToLogin();
      });
    }, 0);
  }

  const navigateToLogin = () => {
    setTimeout(()=> {
      console.log("Navigated!");
      util.animate(selfRef.current, 0, 1000, 1, "ease-in-out", [
        { opacity: "1" },
        { opacity: "0" },
      ], ()=> {
        //load new page here...
        navigate('/login');
      });
    }, util.getRandomTime());
  }

  return (
    <div className={style.splashScreen} ref={selfRef}>
      <div className={style.image}>
        <div className={style.circleLine}></div>
        <div className={[style.circleLine, style.inner].join(" ")}></div>
      </div>
      <div className={style.logoWrapper}>
        <div className={style.logo}>SABI TUTOR</div>
        <div className={style.text }>Learn from anything and anywhere</div>
        <div className={style.loaderWrapper}>
          <div className={style.loader} ref={loaderRef}></div>
          <div className={style.text} ref={loaderTextRef}>Welcome</div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
