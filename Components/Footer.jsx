import React, { useState } from 'react'
import logo from '../Assets/junwoologoblack.png'
import logo2 from '../Assets/junwoologowhite.png'
import style from '../styles/Footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className = {style.main}>
      <div className = {style.footer}>
        <div className = {style.wrap}>
          <img className = {style.image}/>
        </div>
        <div className = {style.text}>
          <p>@2023 <br/> By Jun Woo Oh</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
