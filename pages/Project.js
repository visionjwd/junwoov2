import React from 'react'
import Skills from '@/Components/Skills'
import Projectdetail from '@/Components/Projectdetail'
import Link from 'next/link';
import Head from 'next/head';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import arduino from '../Assets/arduino.webp'
import Cprogram from '../Assets/C++.png'
import yolo from '../Assets/yolo.png'
import firebase from '../Assets/firebase.png'
import flutter from '../Assets/Flutter.webp'
import pcb from '../Assets/pcbblack.png'
import fusion from '../Assets/fusion.png'
import openCV from '../Assets/opencv.png'
import python from '../Assets/python.png'
import nodeJS from '../Assets/Node.png'
import uiux from '../Assets/uiux.png'
import JS from '../Assets/javascript.jpg'
import webCode from '../Assets/htmlcode.jpg'
import MLbgi from '../Assets/MLbgi.jpg'
import EDA from '../Assets/EDA.jpg'
import blur from '../Assets/blur.jpg'
import rubiks from '../Assets/kociemba.jpg'
import cad from '../Assets/cad.png'
import style from '../styles/ProjectMore.module.css'
import rearwing2 from '../Assets/rearwing2.jpg'
import solidworks from '../Assets/Solidworks.png'
import fea from '../Assets/FEA.png'
import ansys from '../Assets/Ansys.png'

const Project = () => {
  return (
    <div className = {style.main}>
      <Head>
        <title>Projects by JunWoo</title>
        <meta name="description" content="Engineering Projects by JunWoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = {style.back}>
          <Link href = '/#projects'>
            <ArrowBackIcon/>
          </Link>
      </div>
      <h1>Projects</h1>
        <Projectdetail
          id = "product"
          bgi = {EDA.src}
          projectLink = "https://github.com/visionjwd/macrofirmware"
          projectLink2 = "/"
          title = "Macro Keypad Product Development"
          details = "Custom mechanical macro keyboard with fully custom PCB and mechanical enclosure. Firmware developed with CircuitPython, with 3 layers of programmable macro keys and slider settings. PCB was designed using EaglePCB and EasyEDA, and the enclosure was designed with Fusion 360, with the final product being printed with Prusa MK3. The encasing was designed to be toolless with easy access to the microcontroller, as well as abiding by DFMA principles for easy of manufacturing. "
          skill1 = {<Skills image = {fusion} text = "Solidworks"/>}
          skill2 = {<Skills image = {pcb} text = "PCB Design"/>}
          skill3 = {<Skills image = {arduino} text = "MicroControllers"/>}
        />
        <Projectdetail
          id = "wingdesign"
          bgi = {rearwing2.src}
          projectLink = "www.junwooo.me"
          projectLink2 = "www.junwooo.me"
          title = "Rear Wing Fixture CAD"
          details = "Designed an alternative rear wing fixture mechanism for the 2023 spec UW Formula SAE car. SOLIDWORKS was utilized to create the fixtures, utilizing standardized parts within the car's ecosystem and tie rods that fit the dimensions. Advanced mating system and mechanical mates were implemented to integrate the designed parts into the assembly. Proper GD&T was implemented to aid the manufacturing process. To ensure similar load distribution and support, FEA was conducted in SOLIDWORKS."
          skill1 = {<Skills image = {solidworks} text = "Solidworks"/>}
          skill2 = {<Skills image = {fea} text = "FEA"/>}
          skill3 = {<Skills image = {ansys} text = "CFD Analysis"/>}
        />
        <Projectdetail
          id = "mldev"
          bgi = {MLbgi.src}
          projectLink = "https://colab.research.google.com/drive/1HFnGgaK2demGW-bh237K4d0DfOY9uIhS"
          projectLink2 = "https://app.roboflow.com/ml-dataset/tmmc-gavyg/deploy/3"
          title = "Object Detection ML development"
          details = "Developed a custom object detection program utilizing YoloV8 and Roboflow as part of Toyota Motor Manufacturing Hackathon in 2023. The model can differentiate whether the body holes on parts is covered with a sticker, uncovered or partially covered. Over 700 sets of images were classified and trained using various iterations of varying exposure, saturation and sharpness systematically selected to be optimized for the test environment, with peak confidence level appraoching 90%. The project was awarded by TMMC for the systematic engineering approach taken."
          skill1 = {<Skills image = {python} text = "Python"/>}
          skill2 = {<Skills image = {openCV} text = "OpenCV"/>}
          skill3 = {<Skills image = {yolo} text = "YoloV8"/>}
        />
        <Projectdetail
          id = "Rubiks"
          bgi = {rubiks.src}
          projectLink = "https://github.com/makislam/BetterThanU/"
          projectLink2 = "https://betterthanu.web.app/"
          title = "Rubiks Cube Solver"
          details = "Designed and built a Rubiks Cube Solver using Lego EV3 kit, taking advantage of the lego platform to create a 6-axis rotation platform for the Rubiks Cube. A simple software was written in C to run on the mindstorm kit."
          skill1 = {<Skills image = {Cprogram} text = "C++"/>}
          skill2 = {<Skills image = {cad} text = "CAD"/>}
        />
        <Projectdetail
          id = "webdev"
          bgi = {webCode.src}
          projectLink = "https://github.com/visionjwd/JWDCreativeHouse"
          projectLink2 = "https://jwdcreativehouse.ca"
          title = "Web Development"
          details = "Developed a NextJS website for JWD Creative House, utilizing server-side rendering for better user experience. NodeMailer serverless API was used for the contact form. A lot of my focus was shifted for SEO, as metatags and keywords were implemented to increase visibility on google. A lot of the unnecessary event loop code was optimized to provide a fast user experience, which also helped with google visibility. "
          skill1 = {<Skills image = {JS}text = "Javascript"/>}
          skill2 = {<Skills image = {uiux}text = "UI/UX"/>}
          skill3 = {<Skills image = {nodeJS}text = "NodeJS"/>}
        />
        <Projectdetail
          id = "flutter"
          bgi = {blur.src}
          projectLink = "https://github.com/AidanBilon/Blur"
          projectLink2 = "/"
          title = "Flutter App Development"
          details = "Social Media app being developed to connect university students in the KW area. Utilizes Flutter for cross-platform functionality, with Google Maps API and Firebase Authentication API utilized for user features. Uses Firebase DB for database and utilizes user management and authentication services provided by Firebase. More details coming..."
          skill1 = {<Skills image = {firebase} text = "Firebase DB"/>}
          skill2 = {<Skills image = {flutter} text = "Flutter"/>}
        />
        
        <div className = {style.endPoint}>
          <div className = {style.stylecontainer}>
          <h2>
            More projects coming...
          </h2>
          </div>
        </div>
    </div>
  )
}

export default Project
