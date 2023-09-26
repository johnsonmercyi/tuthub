import React, { useEffect, useRef, useState } from 'react';

import { IoAppsOutline, IoArchiveSharp, IoAttachSharp, IoBookOutline, IoPlayCircleOutline, IoSearch } from 'react-icons/io5';
import { MdOutlineAddHomeWork } from 'react-icons/md';
import Wrapper from '../../../../../containers/Wrapper/Wrapper';
import image1 from '../../../../../resources/images/1.png';
import image2 from '../../../../../resources/images/2.png';
import image3 from '../../../../../resources/images/3.png';
import image4 from '../../../../../resources/images/4.png';
import ripple from '../../../../../util/ripple.module.css';
import Carousel from '../../../../UI/Carousel/Carousel';
import TitleListContainer from '../../../../UI/TitleListContainer/TitleListContainer';
import MiniCard from '../../../../UI/cards/MiniCard/MiniCard';
import SimpleCard from '../../../../UI/cards/SimpleCard/SimpleCard';
import style from './Home.module.css';
import ChooseLevel from './ChooseLevel/ChooseLevel';
import { fetchAcademicLevels, fetchFaculties, fetchSubAcademicLevels } from '../../../../../util/DummyDb';
import Loader from '../../../utility/Loader/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../../../containers/AppContainer/AppContainer';

const Home = ({ hideNavigationHandler, showNavigationHandler, ...props }) => {
  //Global state managed by application context
  const { user, activeSubLevel, levels, courses } = useAppContext();

  const navigate = useNavigate();
  const shouldAppLoad = useRef(true);

  console.log("Active Level: ", user);

  const [chooseLevel, setChooseLevel] = useState(false);
  const [academicLevels, setAcademicLevels] = useState(fetchAcademicLevels);
  const [subAcademicLevels, setSubAcademicLevels] = useState(null);
  const [chooseLevelData, setChooseLevelData] = useState(academicLevels);
  const [load, setLoad] = useState(false);

  const [chooseLevelhistory, setChooseLevelHistory] = useState([]);


  useEffect(() => {
    if (shouldAppLoad.current) {
      shouldAppLoad.current = false;
      setChooseLevelHistory([{ name: "home", target: null }]);
    }
  }, []);

  const chooseLevelHandler = () => {
    hideNavigationHandler(true);
    setChooseLevel(true);
  }

  const levelClickHandler = (id, level, type) => {
    //Make Http Request here...
    if (type === "basic") {
      setLoad(true);
      setTimeout(() => {
        setChooseLevelData(fetchSubAcademicLevels("academic_level_id", id));
        setLoad(false);
        setChooseLevelHistory(history => [...history, { name: "academic_level", target: level }]);
      }, 2000);
    } else if (type === "tertiary") {
      setLoad(true);
      setTimeout(() => {
        setChooseLevelData(fetchFaculties("academic_level_id", id));
        setLoad(false);
        setChooseLevelHistory(history => [...history, { name: "academic_level", target: level }]);
      }, 2000);
    } else if (true) {

    }

  }

  const chooseLevelDialogHistoryHandler = () => {
    let previousIndex = chooseLevelhistory.length - 1;
    const previousPage = chooseLevelhistory[previousIndex];
    console.log("History: ", chooseLevelhistory);
    console.log("Previous Page: ", previousPage);
    if (previousPage.name === "home") {
      //dismiss the dialog
      //Make Http Request here...S
      setChooseLevel(false);
      hideNavigationHandler(false);
      console.log("home");
    } else if (previousPage.name === "academic_level") {
      //load in the academic level page
      //Make Http Request here...
      setLoad(true);
      setTimeout(() => {
        setChooseLevelData(fetchAcademicLevels());
        setLoad(false);
        setChooseLevelHistory(chooseLevelhistory.slice(0, previousIndex));
      }, 2000);
      console.log("academic_level");
    } else if (previousPage.name === "sub_academic_level") {
      //load in the sub academic level page
    }
  }

  const subjectsHandler = () => {
    navigate('/dashboard/courses');
  }

  return (
    <div className={style.home}>
      <Wrapper customStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '17rem',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
      }}>
        {/* Greeting and Search bar */}
        <Wrapper styleClass={[style.wrapper]}>
          <span className={style.greeting}>Hello &nbsp;<span style={{ fontWeight: "600" }}>{user && user.name}</span></span>
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
        <Wrapper customStyle={{
          height: "3rem",
          minHeight: "3rem",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 0.8rem",
        }}>
          <div className={style.changeLevel}>
            <span
              className={[style.button, ripple.ripple, ripple.darkWaves].join(" ")}
              onClick={chooseLevelHandler}>Change Level</span>
          </div>
          <div className={style.activeLevel}>
            <span className={style.activeLabel}>Active:</span>
            <span className={style.active}>{activeSubLevel && activeSubLevel.name}</span>
          </div>
        </Wrapper>
      </Wrapper>

      <Wrapper customStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'calc(100% - 17rem)',
        marginTop: "17.5rem",
        marginBottom: "0.3rem",
        width: '100%',
        overflowY: "auto",
      }}>

        {/* Mini Cards for subject, Live lesson, Take Exams */}
        <Wrapper customStyle={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 0.3rem",
        }}>
          <MiniCard
            title={"Subjects"}
            content={`${courses ? (courses.length > 1 ? courses.length + " Courses" : courses.length + " Course") : 0}`}
            image={<IoBookOutline />}
            onClickHandler={subjectsHandler} />
          <MiniCard title={"Live Lessons"} content={"120 Courses"} image={<IoPlayCircleOutline />} />
          <MiniCard title={"Take Exams"} content={"145 Courses"} image={<MdOutlineAddHomeWork />} />
        </Wrapper>

        <Wrapper customStyle={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 0.4rem",
        }}>
          {/* Past Questions and Answers Component */}
          <TitleListContainer title={"Past Questions and Answers"}>
            <SimpleCard image={<IoAppsOutline />} title={"UTME Questions"} />
            <SimpleCard image={<IoArchiveSharp />} title={"JAMB Past Questions"} />
            <SimpleCard image={<IoAttachSharp />} title={"WAEC Past Questions"} />
          </TitleListContainer>

          {/* Explore Courses Component */}
          <TitleListContainer title={"Explore Our Courses"}>
            <SimpleCard customStyle={{ width: "100%" }} image={<IoAppsOutline />} title={"UMTE QUESTIONS"} />
            <SimpleCard customStyle={{ width: "100%" }} image={<IoArchiveSharp />} title={"JAMB PAST QUESTIONS"} />
          </TitleListContainer>
        </Wrapper>
      </Wrapper>

      <ChooseLevel
        chooseLevelDialogHistoryHandler={chooseLevelDialogHistoryHandler}
        data={chooseLevelData}
        dataLength={chooseLevelData.length}
        launch={chooseLevel}
        levelClickHandler={levelClickHandler} />

      <Loader load={load} message={"loading..."} />

    </div>
  );
}

export default Home;
