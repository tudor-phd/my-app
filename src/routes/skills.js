
import React from 'react';
import SkillBar from 'react-skillbars';
import './skills.css'
import CircularProgress from "../components/circular-progress/circularProgress"


const colors = {
    "bar": "#49fb35",
    "background": 'black',
    "title": {
      "text": "#fff",
      "background": "green"
    }
  }
const skills = [
    {
      "type": "JavaScript",
      "level": 95
    },
    {
      "type": "HTML/CSS",
      "level": 90
    },
    {
      "type": "React.js",
      "level": 85
    },
    {
      "type": "Node.js",
      "level": 75
    },
    {
      "type": "Next.js",
      "level": 60
    },
    {
      "type": "MongoDB",
      "level": 50
    },
    {
      "type": "Angular",
      "level": 45
    },
    {
      "type": "PostgreSQL",
      "level": 40
    },
    {
      "type": "Sequelize",
      "level": 40
    },
    {
      "type": "Three.js",
      "level": 25
    },
    {
      "type": "GSAP",
      "level": 20
    },
  ]

function Skills() {
    return (
<div className={"skills"}>
<p className={"skills-title"}>Technical skills</p>
<SkillBar skills={skills} animationDuration={3500} height={14} colors = {colors}/>
<p className={"skills-title"}>Proffesional Skills</p>
<div className = {"proffesional-skills"}>
<CircularProgress text = {'Creativity'}/>
<CircularProgress  text = {'Curious'}/>
<CircularProgress  text = {'Punctuality'}/>
<CircularProgress  text = {'Self-starter'}/>
<CircularProgress  text = {'Ambition'}/>
</div>
</div>
    )
};

export default Skills