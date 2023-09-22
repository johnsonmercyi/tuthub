import React, { useEffect, useRef, useState } from 'react';

import { MdArrowBack, MdPlayCircleOutline } from 'react-icons/md';
import { fetchTopics } from '../../../../../../util/DummyDb';
import ripple from '../../../../../../util/ripple.module.css';
import { animate } from '../../../../../../util/util';
import CustomIconButton from '../../../../../UI/Button/CustomIconButton/CustomIconButton';
import Loader from '../../../../utility/Loader/Loader';
import style from './Topics.module.css';
import VideoPlayer from '../../../../../UI/VideoPlayers/VideoPlayer ';

const Topics = ({ launch, topicData = { topic: null, id: null }, closeHandler, ...props }) => {
  const shouldLoad = useRef(true);
  const selfRef = useRef(null);
  const topicListRef = useRef(null);
  const videoContainerRef = useRef(null);

  const [topics, setTopics] = useState(null);
  const [load, setLoad] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (shouldLoad.current) {
      shouldLoad.current = false;
    }

    if (launch) {
      animate(selfRef.current, 0, 300, 1, "ease-in-out", [
        { right: "-100%" },
        { right: "0" },
      ], () => {
        //On finish
        setTopics(fetchTopics("course_id", topicData.id));
      });
    } else {
      animate(selfRef.current, 0, 300, 1, "ease-in-out", [
        { right: "-100%" },
      ], () => {
        //On finish
        setTopics(null);
        setShowVideo(false);
      });
    }
  }, [launch]);

  const loadVideoHandler = () => {
    setLoad(true);
    
    //Http reques to load video details
    setTimeout(() => {
      setShowVideo(true);
      setLoad(false);
    }, 1000);
  }

  return (
    <div className={style.topics} ref={selfRef}>
      <section className={style.header}>
        <span className={style.backButton} onClick={closeHandler}>
          <MdArrowBack />
        </span>
        <span className={style.title}>
          {
            topicData !== null ?
            showVideo ? "COURSE VIDEO" :
              `${String(topicData.topic && topicData.topic).toUpperCase()} TOPICS` : ""
          }
        </span>
      </section>

      <section className={style.body}>
        {
          showVideo ?
            <div className={style.videoContainer} ref={videoContainerRef}>
              <VideoPlayer videoUrl={"https://www.youtube.com/watch?v=qOp4Y2_g5ZI"}/>
            </div> :

            <div className={style.topicList} ref={topicListRef}>
              {
                topics && topics.map((topic, index) => {
                  return (
                    <CustomIconButton
                      clickHandler={loadVideoHandler}
                      styleClasses={[ripple.ripple, ripple.darkWaves]}
                      icon={<MdPlayCircleOutline />}
                      label={topic.title}
                      key={topic.title + "_" + index} />
                  );
                })
              }
            </div>
        }

      </section>

      <Loader load={load} />
    </div>
  );
}

export default Topics;
