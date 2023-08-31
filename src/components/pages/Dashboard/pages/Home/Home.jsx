import React, { useEffect, useRef } from 'react';

import { IoAccessibility, IoAppsOutline, IoArchiveSharp, IoAttachSharp, IoBookOutline, IoPlayCircleOutline, IoScanCircleOutline, IoSearch } from 'react-icons/io5';
import { MdOutlineAddHomeWork, MdOutlinePermDeviceInformation } from 'react-icons/md';
import Wrapper from '../../../../../containers/Wrapper/Wrapper';
import image1 from '../../../../../resources/images/1.png';
import image2 from '../../../../../resources/images/2.png';
import image3 from '../../../../../resources/images/3.png';
import image4 from '../../../../../resources/images/4.png';
import ripple from '../../../../../util/ripple.module.css';
import Carousel from '../../../../UI/Carousel/Carousel';
import TitleListContainer from '../../../../UI/TitleListContainer/TitleListContainer';
import MiniCard from '../../../../UI/cards/MiniCard/MiniCard';
import style from './Home.module.css';
import SimpleCard from '../../../../UI/cards/SimpleCard/SimpleCard';

const Home = (props) => {
  const shouldAppLoad = useRef(true);
  useEffect(()=> {
    if (shouldAppLoad) {
      shouldAppLoad.current = false;
    }
  }, []);

  return (
    <div className={style.home}>
      {/* Greeting and Search bar */}
      <Wrapper styleClass={[style.wrapper]}>
        <span className={style.greeting}>Hello Soft!</span>
        <span className={style.searchIcon}><IoSearch /></span>
      </Wrapper>

      {/* Carousel */}
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
      ]} transitionDelay={3000} />

      {/* Change class */}
      <Wrapper styleClass={[style.wrapper]} customStyle={{ height: "4rem" }}>
        <div className={style.changeLevel}>
          <span className={[style.button, ripple.ripple, ripple.darkWaves].join(" ")}>Change Level</span>
        </div>
        <div className={style.activeLevel}>
          <span className={style.activeLabel}>Active:</span>
          <span className={style.active}>Basic One</span>
        </div>
      </Wrapper>

      {/* Mini Cards for subject, Live lesson, Take Exams */}
      <Wrapper styleClass={[style.wrapper]} customStyle={{ height: "auto" }}>
        <MiniCard title={"Subjects"} content={"145 Courses"} image={<IoBookOutline />}/>
        <MiniCard title={"Live Lessons"} content={"120 Courses"} image={<IoPlayCircleOutline />} />
        <MiniCard title={"Take Exams"} content={"145 Courses"} image={<MdOutlineAddHomeWork />} />
      </Wrapper>

      {/* Past Questions and Answers Component */}
      <TitleListContainer title={"Past Questions and Answers"}>
        <SimpleCard image={<IoAppsOutline />} title={"UMTE QUESTIONS"} />
        <SimpleCard image={<IoArchiveSharp />} title={"JAMB PAST QUESTIONS"} />
        <SimpleCard image={<IoAttachSharp />} title={"WAEC PAST QUESTIONS"} />
      </TitleListContainer>

      {/* Explore Courses Component */}
      <TitleListContainer title={"Explore Our Courses"}>
        <SimpleCard image={<IoAppsOutline />} title={"UMTE QUESTIONS"} />
        <SimpleCard image={<IoArchiveSharp />} title={"JAMB PAST QUESTIONS"} />
      </TitleListContainer>
    </div>
  );
}

export default Home;
