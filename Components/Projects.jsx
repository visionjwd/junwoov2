import React, {useState} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import rearwing from '../Assets/rearwing1.jpg'
import tmmc from '../Assets/TMMC.jpg'
import ProjectItems from './ProjectItems';
import blur from '../Assets/blur.jpg'
import macro from '../Assets/Macro.jpg'
import style from '../styles/Projects.module.css'
import wec from '../Assets/WEC.jpg'
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
                        bgi = {rearwing.src}
                        title = "UWFE Fixture Design CAD"
                        skills = "SOLIDWORKS, CAD"
                        description = "Tie Rod based rear wing fixture design for UW Formula SAE made in SOLIDWORKS."
                        whereTo = "/Project#wingdesign"
                    />
                    <ProjectItems
                        bgi = {wec.src}
                        title = "Waste Collection Robot - WEC"
                        skills = "Rapid Prototyping, Arduino, Breadboard Circuit Design"
                        description = "Waste Collection robot developed for Waterloo Engineering Competition Senior Design Challenge."
                        whereTo = "/Project#WEC"
                    />
                    
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default projects
