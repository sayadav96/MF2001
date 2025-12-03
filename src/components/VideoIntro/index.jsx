import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import styles from "./styles.module.scss";

const VideoIntro = ({ url }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((playVideo) => !playVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    videoRef.current?.load();
  }, [url]);

  return (
    <div className={styles.container_video} id="video">
      <video ref={videoRef} loop controls={false} muted>
        <source
          src="videos/Community_Support_Video_Creation.mp4"
          type="video/mp4"
        />
      </video>
      <div className={cn(styles.video_overlay, "flex_center")}>
        <button
          className={cn(styles.video_overlay_circle, "flex_center")}
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill className={styles.video_icon} />
          ) : (
            <BsFillPlayFill className={styles.video_icon} />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoIntro;
