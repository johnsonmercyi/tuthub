import React from 'react';

import style from './MenuItem.module.css';
import { Link } from 'react-router-dom';

const MenuItem = ({link, icon, label, clickHandler, ...props}) => {

  const linkStyle = {
    textDecoration: "none",
    height: "100%",
    width: "100%",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <li className={style.menuItem}>
      <Link to={link && link} style={linkStyle} onClick={clickHandler}>
        <span className={style.icon}>{icon}</span>
        <span className={style.label}>{label && label}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
