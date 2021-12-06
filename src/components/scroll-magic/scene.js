
  import React from 'react';
  import { Controller, Scene } from 'react-scrollmagic';
  import "./scene.css"
  import TimeTex from '../../images/timetex.png'
  import TimeTex1 from '../../images/timetex1.png'
  //import TimeTex2 from '../../images/timetex2.png'
  import Annai from '../../images/annai.png'
  import Octant from '../../images/octant.png'
  import Jitsi from '../../images/jitsi.png'
  const SceneScroll = () => (
    <div className={"project-work"}>
      <Controller>
        <Scene duration={600} pin>
          <h1>Some contributions</h1>
        </Scene>
        <Scene duration={600} pin>
        <div>
        <h1>Jitsi</h1>
       <div className="app-text">
       <p className={"app-about"}>Jitsi is a set of open-source projects that allows you to easily build and deploy secure video conferencing solutions.</p>
        <p className={"app-about"}>Jitsi are Jitsi Videobridge and Jitsi Meet, which let you have conferences on the internet, while other projects in the community enable other features such as audio, dial-in, recording, and simulcasting.</p>
        <div className="">
            <img className="timetex-img" src={Jitsi} alt="Jitsi"/>
          </div>
       </div>
        </div>

        </Scene>
        <Scene duration={600} pin>
        <div>
        <h1>Timetex</h1>
       <div className="app-text">
       <p className={"app-about"}>The new TimeTEX Web App School Planner for all smart phones, tablets, PCs and Macs - and for all operating systems. The web app is based online and can therefore be used on all devices with an Internet connection - even in combination with each other.</p>
        <p className={"app-about"}>The app offers you extensive flexibility in all areas, both the timetable and the pupil rating can be adjusted freely. In addition, you do not need a good internet connection, as the app can also be used offline.</p>
        <div className="">
            <img className="timetex-img" src={TimeTex} alt="Timetex"/>
            <img className="timetex-img" src={TimeTex1} alt="Timetex1"/>
            {/* <img className="timetex-img" src={TimeTex2} alt="Timetex2"/> */}
          </div>
       </div>
        </div>

        </Scene>
        <Scene duration={600} pin>
        <div>
        <h1>Annai Systems</h1>
       <div className="app-text">
       <p className={"app-about"}>Annai Systems is a leading genomic data analysis company committed to developing cost-reducing innovations that accelerate discovery.</p>
       <div className="">
            <img className="timetex-img" src={Annai} alt="Annai"/>
          </div>
       </div>
        </div>
        </Scene>
        <Scene duration={600} pin>
        <div>
        <h1>Octant AI</h1>
       <div className="app-text">
       <p className={"app-about"}> Octant AI is an Artificial Intelligence platform which drives better project outcome performance. Emerging from a collaboration at University of Oxford, the technology delivers more accurate and much earlier insights into project performance across a range of different key result areas, including time, cost, revenue, and other critical factors. Calibrated on thousands of projects, Octant AI is progressively tuned to user organisations’ unique circumstances, and continuously improves with use. It can be applied to any undertaking that is delivered in the form of a project, programme, or portfolio.</p>
       <div className="">
            <img className="timetex-img" src={Octant} alt="Octant"/>
          </div>
       </div>
        </div>
        </Scene>
      </Controller>
    </div>
  );
  
  export default SceneScroll