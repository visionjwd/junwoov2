import React, {useState} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import creativehouse from '../Assets/creativehouse.jpg'
import tmmc from '../Assets/TMMC.jpg'
import ProjectItems from './ProjectItems';
import blur from '../Assets/blur.jpg'
import macro from '../Assets/Macro.jpg'
import style from '../styles/Projects.module.css'
import Link from 'next/link';

function projects() {
    const [unveil, setUnveil] = useState(false);

    const toggleVeil = () => {
        setUnveil(!unveil);
    }

  return (
    <div className = {style.wrap} id = 'projects'>
      <div className = {style.main} id = {unveil ? style.open : style.close}> 
        <div className = {style.screen}>
            <h1>Projects</h1>
            <button onClick={toggleVeil}>Unveil</button>
        </div>
        <div className = {style.project}>
            <div className = {style.title}>
                <h1>Projects</h1>
                <button onClick = {toggleVeil}>Hide</button>
                <Link href = '/Project'>
                    <button>More</button>
                </Link>
            </div>
            <div className = {style.projectContainer}>
                <div className = {style.flex}>
                    <ProjectItems
                        bgi = {creativehouse.src}
                        title = "JWD Creative House"
                        skills = "UI/UX design, FullStack Dev"
                        description = "NextJS web app utilizing Server-Side Rendering, NodeMailer Serverless API, and dynamics sitemap for Google SEO."
                    />
                    <ProjectItems
                        bgi = {tmmc.src}
                        title = "TMMC hackathon ML Dev"
                        skills = "Python, OpenCV, Deep Learning"
                        description = "Developed an object detection model that differentiated between body holes covered in stickers in an automotive manufacturing line. Utilized YoloV8 training model with custom dataset created with RoboFlow."
                    />
                </div>
                <div className = {style.flex}>
                    <ProjectItems
                        bgi = {macro.src}
                        title = "Macro KeyPad"
                        skills = "CAD, PCB Design, Firmware development"
                        description = "Custom macro keypad, designed with Fusion 360, custom PCB design with EaglePCB, and utilizes Rasbery Pi PICO running CircuitPy for macro inputs"
                    />
                    <ProjectItems
                        bgi = {blur.src}
                        title = "Blur - Flutter App"
                        skills = "Dart, ProgreSQL, API implementation"
                        description = "Social Media app that connects university students for entertainment, made by university students."
                    />
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default projects
