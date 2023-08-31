import React from 'react';

import style from './Navigation.module.css';
import MenuItem from './MenuItem/MenuItem';
import { MdHome, MdPlayCircleOutline, MdSearch } from 'react-icons/md';
import { IoBookSharp, IoPersonCircleOutline } from 'react-icons/io5';

const Navigation = (props) => {
  return (
    <div className={style.navigation}>
      <ul className={style.menuList}>
        <MenuItem link={"home"} icon={<MdHome />} label={"Home"} />
        <MenuItem link={"courses"}  icon={<MdPlayCircleOutline />} label={"Courses"} />
        <MenuItem link={"search"} icon={<MdSearch />} label={"Search"} />
        <MenuItem link={"solution"}  icon={<IoBookSharp />} label={"Solution"} />
        <MenuItem link={"profile"}  icon={<IoPersonCircleOutline />} label={"Profile"} />
      </ul>
    </div>
  );
}

export default Navigation;
