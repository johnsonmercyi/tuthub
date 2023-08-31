import React, { useEffect, useRef } from 'react';

import style from './Dashboard.module.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import * as util from '../../../util/util';
import Wrapper from '../../../containers/Wrapper/Wrapper';
import * as icons from '../../../util/icons';
import Navigation from '../../UI/Navigation/Navigation';
import MenuItem from '../../UI/Navigation/MenuItem/MenuItem';
import { IoBookSharp, IoPersonCircleOutline } from 'react-icons/io5';
import { MdHome, MdPlayCircleOutline, MdSearch } from 'react-icons/md';
import Viewport from '../../../containers/Viewport/Viewport';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Search from './pages/Search/Search';
import Solution from './pages/Solution/Solution';
import Profile from './pages/Profile/Profile';

const Dashboard = (props) => {
  const navigate = useNavigate();
  const selfRef = useRef(null);
  const shouldLoadApp = useRef(true);
  const location = useLocation();
  let componentToRender = null;

  useEffect(() => {
    if (shouldLoadApp) {
      shouldLoadApp.current = false;
      display();
    }
  });

  const renderComponent = () => {
    console.log("Location: ", location.pathname);
    switch (location.pathname) {
      case '/dashboard/home':
        componentToRender = <Home />;
        break;

      case '/dashboard/courses':
        componentToRender = <Courses />;
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
      <Navigation />

      <Viewport>{componentToRender}</Viewport>
    </div>
  );
}

export default Dashboard;
