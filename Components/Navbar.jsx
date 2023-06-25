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

  const [imagepath, SwitchImage] = useState(logo)

  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLight = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = e => {
    if(e.target.checked) {
      SwitchImage(logo2);
      setDark();
    }
    else{
      setLight();
      SwitchImage(logo);
    } 
  };

  return (
    <div className = {style.navbar} id = {openLinks ? style.open : style.close}>
      <div className = {style.menu} onClick = {toggleNav}>
        <div className = {style.top}>
          <Link href = '/'>
             <Image className = {style.image} src = {imagepath} alt = '/'/>
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
             <Image className = {style.image} priority = {true} src = {imagepath} alt = '/'/>
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
