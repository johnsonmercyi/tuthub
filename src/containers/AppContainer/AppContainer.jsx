import React, { useEffect, useLayoutEffect, useRef } from 'react';

import style from './AppContainer.module.css';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from '../../components/pages/ScreenSplash/SplashScreen';
import Login from '../../components/pages/Login/Login';

const AppContainer = ({ classes = [], ...props }) => {
  const shouldLoadApp = useRef(true);

  useLayoutEffect(() => {
    if (shouldLoadApp.current) {
      console.log("app loaded!");
      shouldLoadApp.current = false;
    }
  }, []);

  return (
    <div className={[style.appContainer, classes.join(",")].join(" ")}>
      <Routes>
        <Route index path="/" element={<SplashScreen />} />
        <Route index path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AppContainer;