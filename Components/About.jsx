import React from 'react'
import Image from 'next/image'
import Skills from '../Components/Skills'

import cad from '../Assets/cad.png'
import pcb from '../Assets/pcb.png'
import appdev from '../Assets/appdev.png'
import fullstack from '../Assets/fullstack.png'
import ml from '../Assets/ML.png'

import aboutImage from '../Assets/portrait.jpg'
import style from '../styles/About.module.css'


function About() {
  return (
    <div id = 'about' className = {style.main}>
      <div className = {style.textSide}>
        <div className = {style.container}>
        <h1>About Me</h1>
        <p>I'm a mechanical enginering student at the University of Waterloo. 
           My aspirations are to become a successful product design engineer, 
           with a fluent understanding of mechanical, hardware and software development of a product. 
           With a background in the creative industry as a media producer, 
           I took interest in front-end development through React, starting my journey in software development. 
           My current and previous projects involve full-stack developmenat through NextJS/MERN, 
           OpenCV and deep learning model development, and app development with Flutter. </p>
        <p>As a mechanical engineering student, I also enjoy developing products, often researching various ways to improve the experience of programmers with cool gadgets. I am skilled in mechanical design through Fusion360, Solidworks, and Inventor, along with PCB design with EaglePCB. 
        </p>
        <div className = {style.skillsets}>
            <h2>Skillsets:</h2>
            <div className = {style.programs}>
                <Skills image = {cad} text = "CAD"/>
                <Skills image = {pcb} text = "Electrical Design"/>
                <Skills image = {ml} text = "ML Dev"/>
                <Skills image = {fullstack} text = "FullStack Dev"/>
                <Skills image = {appdev} text = "App Dev"/>
            </div>
        </div>
        </div>
      </div>
      <div className = {style.imageSide}>
        <img src = {aboutImage.src}/> 
        <div className = {style.over}>
            <div className = {style.overText}>
            <h2>Jun Woo Oh</h2>
            <p>Engineering Student @Waterloo</p>
            </div>

        </div> 
      </div>
    </div>
  )
}

export default About
