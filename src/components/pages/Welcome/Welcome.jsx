import React, { useEffect, useRef, useState } from 'react';

import style from './Welcome.module.css';
import * as util from '../../../util/util';
import Wrapper from '../../../containers/Wrapper/Wrapper';
import * as dummyDb from '../../../util/DummyDb';
import { useAppContext } from '../../../containers/AppContainer/AppContainer';
import { useNavigate } from 'react-router-dom';

const Welcome = (props) => {

  const { user, setCourses, setLevels, setActiveSubLevel } = useAppContext();

  const navigate = useNavigate();
  const selfRef = useRef(null);
  const shouldLoadApp = useRef(false);

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
    appData().then((results)=> {
      const levels = results[0];
      const userActiveSubLevel = results[1].filter(level => level.user_id === user.id)[0];
      let subLevelCourses = dummyDb.fetchUserSublevelCourses(userActiveSubLevel.sub_academic_level_id);

      //Update global state using app context
      setLevels(levels);
      setActiveSubLevel(dummyDb.fetchActiveSubLevelDetails(userActiveSubLevel.sub_academic_level_id)[0]);
      setCourses(subLevelCourses);

      //fake process
      setTimeout(() => {
        //navigate to dashboard here...
        navigateToDashboard();
      }, util.getRandomTime());
      
    });
  }

  async function appData() {
    const levels = fetchLevels();
    const activeLevels = fetchUserActiveSubLevels();
    const usersSubLevelcourses = fetchSubAcademicLevelsCourses();
    const courses = fetchCourses();

    const data = await Promise.all([levels, activeLevels, usersSubLevelcourses, courses]);

    return data;
  }

  async function fetchLevels() {
    //Do http request here to fetch all levels
    return await dummyDb.fetchAcademicLevels();
  }

  async function fetchUserActiveSubLevels() {
    //Do http request here to fetch all users active levels
    return await dummyDb.fetchUserActiveSubLevels();
  }

  async function fetchSubAcademicLevelsCourses() {
    //Do http request here to fetch all sub level courses
    return await dummyDb.fetchSubAcademicLevelsCourses();
  }

  async function fetchCourses() {
    //Do http request here to fetch all courses
    return await dummyDb.fetchCourses();
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
