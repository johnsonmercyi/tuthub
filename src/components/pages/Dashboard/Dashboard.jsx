import React, { useEffect, useRef } from 'react';

import style from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import * as util from '../../../util/util';

const Dashboard = (props) => {
  const navigate = useNavigate();
  const selfRef = useRef(null);
  const shouldLoadApp = useRef(true);

  useEffect(() => {
    if (shouldLoadApp) {
      shouldLoadApp.current = false;
      display();
    }
  });

  const display = () => {
    util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: "1" },
    ], () => {
      //load new page here...
    });
  }

  return (
    <div className={style.dashboard} ref={selfRef}>Dashboard here🍾🎉😉</div>
  );
}

export default Dashboard;
