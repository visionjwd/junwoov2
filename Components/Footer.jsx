import React from 'react'
import logo from '../Assets/junwoologoblack.png'
import style from '../styles/Footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className = {style.main}>
      <div className = {style.footer}>
        <div className = {style.wrap}>
          <Image className = {style.image} src = {logo}/>
        </div>
        <div className = {style.text}>
          <p>@2023 <br/> By Jun Woo Oh</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
