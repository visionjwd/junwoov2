import React from 'react'
import Link from 'next/link'
import style from '../styles/Contact.module.css'
import ContactIcon from './ContactIcon'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div className = {style.main} id = "contact">
        <div className = {style.wrapper}>
        <div className = {style.flex}>
            <h1>Let's <br/> <span>Connect!</span></h1>
            <p>Reach out to me via any of these:</p>
        </div>
        <div className = {style.flex} id = "logos">
            <ContactIcon logo = {<GitHubIcon/>} whereTo = "https://www.github.com/visionjwd"/>
            <ContactIcon logo = {<LinkedInIcon/>} whereTo = "https://www.Linkedin.com/in/junwoooh/"/>
            <ContactIcon logo = {<MailIcon/>} whereTo = "mailto: visionjwd@gmail.com"/>
        </div>
        </div>
    </div>
  )
}

export default Contact
