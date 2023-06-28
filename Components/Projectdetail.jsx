import React from 'react'
import Link from 'next/link'
import style from '../styles/detail.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import Skills from './Skills';

function Projectdetail(props) {
  return (
    <div className = {style.wrapper} id = {props.id}>
      <div className = {style.container}>
        <div className = {style.imageSide} style={{ backgroundImage: `url(${props.bgi})`}}>
          <div className = {style.imageHidden}>
            <Link href = {props.projectLink} target = "_blank"><GitHubIcon/></Link>
            <Link href = {props.projectLink2} target = "_blank"><PhonelinkIcon/></Link>
          </div>
        </div>
        <div className = {style.description}>
          <div className = {style.texts}>
          <h2>{props.title}</h2>
          <p>{props.details}</p>
          <h3>Relevant Skills:</h3>
          <div className = {style.skillList}>
            {props.skill1}
            {props.skill2}
            {props.skill3}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projectdetail
