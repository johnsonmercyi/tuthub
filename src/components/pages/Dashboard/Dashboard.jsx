import React, { useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Viewport from '../../../containers/Viewport/Viewport';
import * as util from '../../../util/util';
import Navigation from '../../UI/Navigation/Navigation';
import style from './Dashboard.module.css';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import Solution from './pages/Solution/Solution';
import * as dummyDb from '../../../util/DummyDb';
import { useAppContext } from '../../../containers/AppContainer/AppContainer';

const Dashboard = (props) => {

  const { getLocalStorageData, setLevels, activeSubLevel, setActiveSubLevel, setCourses, setUserActiveSubLevels } = useAppContext();
  const user = getLocalStorageData("user");

  const navigate = useNavigate();
  const selfRef = useRef(null);
  const shouldLoadApp = useRef(true);
  const location = useLocation();

  /**
   * Component State
   */
  const [hideNavigation, setHideNavigation] = useState(false);

  let componentToRender = null;
  console.log("DASHBOARD: ", activeSubLevel);

  useEffect(() => {
    if (shouldLoadApp.current) {
      shouldLoadApp.current = false;
      display();
    }
  }, [activeSubLevel]);

  const hideNavigationHandler = (hide) => {
    setHideNavigation(hide);
  }

  const renderComponent = () => {
    console.log("Location: ", location.pathname);
    switch (location.pathname) {
      case '/dashboard/home':
        componentToRender = <Home
          hideNavigationHandler={hideNavigationHandler} />;
        break;

      case '/dashboard/courses':
        componentToRender = <Courses
          hideNavigationHandler={hideNavigationHandler} />;
        break;

      case '/dashboard/search':
        componentToRender = <Search />;
        break;

      case '/dashboard/solution':
        componentToRender = <Solution />;
        break;

      case '/dashboard/profile':
        componentToRender = <Profile />;
        break;

      default:
        componentToRender = <Home />;
        break;
    }
  }

  renderComponent();

  const display = () => {
    util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: "1" },
    ], () => {
      //do something else after loading page like: https request...
      
    });
  }

  return (
    <div className={style.dashboard} ref={selfRef}>
      {
        !hideNavigation ? <Navigation /> : null
      }

      <Viewport>{componentToRender}</Viewport>
    </div>
  );
}

export default Dashboard;
