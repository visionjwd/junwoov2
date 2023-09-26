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
                        bgi = {macro.src}
                        title = "Macro KeyPad"
                        skills = "CAD, PCB Design, Firmware development"
                        description = "Custom macro keypad designed with Fusion 360, custom PCB design and CircuitPy firmware."
                        whereTo = "/Project#product"
                    />
                    <ProjectItems
                        bgi = {tmmc.src}
                        title = "TMMC hackathon ML Dev"
                        skills = "Python, OpenCV, Deep Learning"
                        description = "Object Detection model trained using Roboflow and YoloV8, implemented with OpenCV."
                        whereTo = "/Project#mldev"
                    />
                </div>
                <div className = {style.flex}>
                    <ProjectItems
                        bgi = {creativehouse.src}
                        title = "JWD Creative House"
                        skills = "UI/UX design, FullStack Dev"
                        description = "NextJS web app with NodeMailer Serverless API and dynamics sitemap for Google SEO."
                        whereTo = "/Project#webdev"
                    />
                    <ProjectItems
                        bgi = {blur.src}
                        title = "Blur - Flutter App"
                        skills = "Dart, Firebase DB, Firebase Auth/User Management"
                        description = "Social Media app that connects university students for entertainment, made by university students."
                        whereTo = "/Project#flutter"
                    />
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default projects
