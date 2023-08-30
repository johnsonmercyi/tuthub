import React, { useEffect, useRef } from 'react';

import style from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import * as util from '../../../util/util';
import Wrapper from '../../../containers/Wrapper/Wrapper';
import * as icons from '../../../util/icons';
import Carousel from '../../UI/Carousel/Carousel';
import image1 from '../../../resources/images/1.png';
import image2 from '../../../resources/images/2.png';
import image3 from '../../../resources/images/3.png';
import image4 from '../../../resources/images/4.png';
import image5 from '../../../resources/images/5.png';

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
    <div className={style.dashboard} ref={selfRef}>
      <Wrapper styleClass={[style.wrapper]}>
        <span className={style.greeting}>Hello Soft!</span>
        <span className={style.searchIcon}><icons.ioIcons.IoSearch /></span>
      </Wrapper>

      <Carousel slides={[
        {
          name: "slide_1",
          header: "Secure The Online World",
          contentText: "Let's get you started now!",
          buttonText: "Get started",
          image: image1,
          imageSize: "70%",
          dotRef: useRef(null),
          clickHandler: null,
        },
        {
          name: "slide_2",
          header: "Sabi Tutor No Dey Carry Last",
          contentText: "Try us make you confirm!",
          buttonText: "Follow us talk",
          image: image2,
          imageSize: "90%",
          dotRef: useRef(null),
          clickHandler: null,
        },
        {
          name: "slide_3",
          header: "Academy in Your Pocket",
          contentText: "knowledge is power!",
          buttonText: "Start here",
          image: image3,
          imageSize: "70%",
          dotRef: useRef(null),
          clickHandler: null,
        },
        {
          name: "slide_4",
          header: "Go Premium To Sky",
          contentText: `Opportunity to upgrade your skills!`,
          buttonText: "Grab it!",
          image: image4,
          imageSize: "90%",
          dotRef: useRef(null),
          clickHandler: null,
        }
      ]} transitionDelay={3000}/>
    </div>
  );
}

export default Dashboard;
