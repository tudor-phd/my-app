import React, { useState, useEffect } from "react";
import PlayIcon from "../../components/play-icon/playIcon"
import './sound.css'
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  audio.loop = true;
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div onClick={toggle}>
      <PlayIcon play = {playing}/>
    </div>
  );
};

export default Player;