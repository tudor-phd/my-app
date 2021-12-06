import React, { useEffect } from 'react';
import NeonButton from '../components/neon-button/neonButton'
// import * as THREE from 'three';
// import { TweenMax } from 'gsap/all'
import hoverEffect from 'hover-effect'

import aboutImage from '../images/about.jpeg'
import aboutImage2 from '../images/about2.jpeg'
import './about.css'


export default function About() {
  useEffect(() => {
    const container = document.querySelector(".about-container");

    if (container) {
      new hoverEffect({
        parent: document.querySelector('.about-container'),
        intensity1: 1,
        intensity2: 1,
        speedIn: 1,
        speedOut: 1,
        image1: aboutImage,
        image2: aboutImage2,
        displacementImage: aboutImage2
      });
    }
  }, []);
  return (
<div>
<div className="heading">
<div className = {"about-hero-text"}>“Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.” - Sherlock Homes”</div>

  <div>
    <p className="slide-up"><span className="green">Hello there</span>,</p>
  </div>
  <div>
    <h6 className="slide-up">
    I'm Tudor. I am a skilled and passionate web developer as a full-stack JavaScript engineer with React.js and Node.js. I have around 9 years of experience in JavaScript technologies. In recent years I have been a JavaScript full-stack developer. I gained experience by working for different IT companies in Cluj-Napoca, but also being a freelancer.
    Can't wait to meet up and discuss more!

    </h6>
  </div>
  <div>
    <p className="slide-up"> <a className = {"email-me"} href="mailto:tudor.dan.pop7@gmail.com">Email Me</a> </p>
  </div>
</div>
    <div className={"about-container"}>
      <div className={"about-lkdn"}>
        <NeonButton title={"LinkedIn"} url={"linkedin"} />
      </div>
    </div>
</div>
  );
}