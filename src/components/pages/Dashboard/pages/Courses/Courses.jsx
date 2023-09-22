import React, { useEffect, useRef, useState } from 'react';

import { MdLibraryBooks } from 'react-icons/md';
import { fetchCourses } from '../../../../../util/DummyDb';
import ripple from '../../../../../util/ripple.module.css';
import CustomIconButton from '../../../../UI/Button/CustomIconButton/CustomIconButton';
import style from './Courses.module.css';
import { useLocation } from 'react-router-dom';
import Wrapper from '../../../../../containers/Wrapper/Wrapper';
import Topics from './Topics/Topics';

const Courses = ({ hideNavigationHandler, ...props}) => {
  const shouldLoad = useRef(true);

  const [courses, setCourses] = useState(null);
  const [topicData, setTopicData] = useState(null);
  const [launchTopics, setLaunchTopics] = useState(false);

  const location = useLocation();
  let componentToRender = null;

  useEffect(() => {
    if (shouldLoad.current) {
      shouldLoad.current = false;
      setCourses(fetchCourses);
    }
  }, []);

  const launchTopicsHandler = (topic, id) => {
    setTopicData({topic: topic, id: id});
    hideNavigationHandler(true);
    setLaunchTopics(true);
  }

  const closeTopicsHandler = () => {
    hideNavigationHandler(false);
    setLaunchTopics(false);
  }

  return (
    <div className={style.courses}>
      <Wrapper>
        <section className={style.header}>
          CHOOSE COURSES
        </section>

        <section className={style.body}>
          {
            courses && courses.map((obj, index) => {
              return (
                <CustomIconButton
                  clickHandler={() => launchTopicsHandler(obj.name, obj.id)}
                  styleClasses={[ripple.ripple, ripple.darkWaves]}
                  icon={<MdLibraryBooks />}
                  label={obj.name}
                  key={obj.name + "_" + index} />
              )
            })
          }
        </section>

        <Topics 
          topicData={topicData}
          launch={launchTopics}
          closeHandler={closeTopicsHandler}/>
      </Wrapper>
    </div>
  );
}

export default Courses;
