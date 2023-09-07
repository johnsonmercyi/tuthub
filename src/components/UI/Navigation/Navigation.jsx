import React from 'react';

import style from './Navigation.module.css';
import MenuItem from './MenuItem/MenuItem';
import { MdHome, MdHomeMini, MdOutlineHome, MdPlayCircleOutline, MdSearch } from 'react-icons/md';
import { IoBookOutline, IoBookSharp, IoPersonCircleOutline } from 'react-icons/io5';

const Navigation = (props) => {
  return (
    <div className={style.navigation}>
      <ul className={style.menuList}>
        <MenuItem link={"home"} icon={<MdOutlineHome />} label={"Home"} />
        <MenuItem link={"courses"}  icon={<MdPlayCircleOutline />} label={"Courses"} />
        <MenuItem link={"search"} icon={<MdSearch />} label={"Search"} />
        <MenuItem link={"solution"}  icon={<IoBookOutline />} label={"Solution"} />
        <MenuItem link={"profile"}  icon={<IoPersonCircleOutline />} label={"Profile"} />
      </ul>
    </div>
  );
}

export default Navigation;
