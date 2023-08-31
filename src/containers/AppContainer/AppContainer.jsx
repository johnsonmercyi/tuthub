import React, { useEffect, useLayoutEffect, useRef } from 'react';

import style from './AppContainer.module.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import SplashScreen from '../../components/pages/ScreenSplash/SplashScreen';
import Login from '../../components/pages/Login/Login';
import Welcome from '../../components/pages/Welcome/Welcome';
import Dashboard from '../../components/pages/Dashboard/Dashboard';
import Home from '../../components/pages/Dashboard/pages/Home/Home';
import Courses from '../../components/pages/Dashboard/pages/Courses/Courses';

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
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Outlet />} />
          <Route path="/dashboard/courses" element={<Outlet />} />
          <Route path="/dashboard/search" element={<Outlet />} />
          <Route path="/dashboard/solution" element={<Outlet />} />
          <Route path="/dashboard/profile" element={<Outlet />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppContainer;