import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

import style from './AppContainer.module.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import SplashScreen from '../../components/pages/ScreenSplash/SplashScreen';
import Login from '../../components/pages/Login/Login';
import Welcome from '../../components/pages/Welcome/Welcome';
import Dashboard from '../../components/pages/Dashboard/Dashboard';
import Home from '../../components/pages/Dashboard/pages/Home/Home';
import Courses from '../../components/pages/Dashboard/pages/Courses/Courses';

//Create a context
const AppContext = createContext();

const AppContainer = ({ classes = [], ...props }) => {
  const shouldLoadApp = useRef(true);

  //Application Global State
  // const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [academicLevels, setAcademicLevels] = useState([]);
  const [subAcademicLevels, setSubAcademicLevels] = useState([]);
  const [userActiveSubLevels, setUserActiveSubLevels] = useState([]);
  const [activeSubLevel, setActiveSubLevel] = useState(null);

  function setLocalStorageData(key, value) {
    if ( typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value))
    } else localStorage.setItem(key, value);
  }

  function getLocalStorageData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  useLayoutEffect(() => {
    if (shouldLoadApp.current) {
      console.log("app loaded!");
      shouldLoadApp.current = false;
    }
  }, []);

  return (
    <AppContext.Provider value={{
      courses, setCourses,
      academicLevels, setAcademicLevels,
      subAcademicLevels, setSubAcademicLevels,
      activeSubLevel, setActiveSubLevel,
      getLocalStorageData, setLocalStorageData,
      userActiveSubLevels, setUserActiveSubLevels,
    }}>
      <div className={[style.appContainer, classes.join(",")].join(" ")}>
        <Routes>
          <Route index path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/home" element={<Outlet />} />
            <Route path="/dashboard/courses" element={<Outlet />} >
              <Route path="/dashboard/courses/video" element={<Outlet />} />
            </Route>
            <Route path="/dashboard/search" element={<Outlet />} />
            <Route path="/dashboard/solution" element={<Outlet />} />
            <Route path="/dashboard/profile" element={<Outlet />} />
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default AppContainer;

//Create a custom hook to consume the context
export function useAppContext() {
  return useContext(AppContext);
}