import React, { useEffect, useRef } from 'react';

import style from './Loader.module.css';
import * as util from '../../../../util/util';

const Loader = ({load, message, successHandler, ...props}) => {
  const selfRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    console.log("Loading:", load);
    if (load) {
      showLoader();
    } else {
      hideLoader();
    }

  }, [load]);

  const spinLoader = () => {
    util.animate(loaderRef.current, 0, 2000, Infinity, "ease-in-out", [
      { transform: "rotate(360deg)" }
    ]);
  }

  const showLoader = () => {
    selfRef.current.style.display = "flex";
    util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: 0 },
      { opacity: 1 },
    ], () => {
      spinLoader();
    });
  }

  const hideLoader = () => {
    util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: 1 },
      { opacity: 0 },
    ], () => {
      selfRef.current.style.display = "none";
    });
  }

  

  return (
    <div className={style.loader} ref={selfRef}>
      <div className={style.spinner} ref={loaderRef}></div>
      <span className={style.message}>{message ? message : "Loading..."}</span>
    </div>
  );
}

export default Loader;
