import React from 'react'
import style from '../styles/skills.module.css'
import Image from 'next/image'

function Skills(props) {
  return (
    <div className = {style.wrap}>
      <Image className = {style.skills} src = {props.image} alt = '/'/>
      <div className = {style.hidden}>
        <h4>{props.text}</h4>
      </div>
    </div>
  )
}

export default Skills