import React , {useState} from 'react'
import Link from 'next/link'
import logo from '../Assets/junwoologoblack.png'
import logo2 from '../Assets/junwoologowhite.png'
import style from '../styles/Navbar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import ReorderIcon from '@mui/icons-material/Reorder'
import CloseIcon from '@mui/icons-material/Close'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

import Image from 'next/image'

function Navbar() {
  const [openLinks, setLinks] = useState(false)

  const toggleNav = () => {
    setLinks(!openLinks);
  }


  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLight = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = e => {
    if(e.target.checked) {
      setDark();
    }
    else{
      setLight();
    } 
  };

  return (
    <div className = {style.navbar} id = {openLinks ? style.open : style.close}>
      <div className = {style.menu} onClick = {toggleNav}>
        <div className = {style.top}>
          <Link href = '/'>
             <Image className = {style.image} priority = {true} src = {logo} alt = '/'/>
          </Link>
          <button onClick={toggleNav}>
              <CloseIcon/>
          </button>
        </div>
        <div className = {style.mLinks}>
            <Link href = '/#about' onClick={toggleNav}>
                <p>ABOUT</p>
            </Link>
            <Link href = '/#projects' onClick={toggleNav}>
                <p>PROJECTS</p>
            </Link>
            <Link href = '/#media' onClick={toggleNav}>
                <p>MEDIA</p>
            </Link>
            <Link href = '/#contact' onClick={toggleNav}>
                <p>CONTACT</p>
            </Link>
        </div>
        <div className = {style.mSwitch}>
             <label className = {style.switch}>
                <span className = {style.mday}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill= "rgb(50,50,50)"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                <span className = {style.mnight}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g fill = "#fff"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></g></svg></span>
                <input type = "checkbox" onClick={toggleTheme}/>
                <span className={style.slider}></span>
              </label>
        </div>
        <div className = {style.mSocials}>
            <Link href = "https://www.github.com/visionjwd" target = '_blank'>
              <button><GitHubIcon/></button>
            </Link>
            <Link href = "https://www.linkedin.com/in/junwoooh/" target = '_blank'>
              <button><LinkedInIcon/></button>
            </Link>
            <Link href = "mailto:jwoh@uwaterloo.ca" target='blank'>
              <button><MailIcon/></button>
            </Link>
        </div>
      </div>
      <div className = {style.nav}> 
        <div className = {style.third} id = 'logo'>
        <Link href = '/'>
             <Image className = {style.image} priority = {true} src = {logo} alt = '/'/>
        </Link>
        </div>
        <div className = {style.third}>
        <div className = {style.container}>
            <Link href = '/#about'>
                <p>ABOUT</p>
            </Link>
            <Link href = '/#projects'>
                <p>PROJECTS</p>
            </Link>
            <Link href = '/#media'>
                <p>MEDIA</p>
            </Link>
            <Link href = '/#contact'>
                <p>CONTACT</p>
            </Link>
        </div>
        </div>
        <div className = {style.third} id = {style.contact}>
              <label className = {style.switch}>
                <span className = {style.day}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill= "rgb(50,50,50)"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                <span className = {style.night}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g fill = "#fff"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></g></svg></span>
                <input type = "checkbox" onClick= {toggleTheme}/>
                <span className={style.slider}></span>
              </label>
        </div>
        <div className = {style.mobile}>
            <button onClick = {toggleNav}><ReorderIcon/></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
