import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/items.module.css'

function ProjectItems(props) {
  return (
    <div className = {style.wrapper} >
        <div className = {style.under}>
            <h3>{props.title}</h3>         
        </div>
        <div className = {style.main} style={{ backgroundImage: `url(${props.bgi})`}}>
            <div className = {style.over}>
                <div className = {style.overContainer}>
                    <h4>Skills: {props.skills}</h4>
                    <p>{props.description}</p>
                    <Link href = {props.whereTo}>
                      <button>Details</button>
                    </Link>
                </div>
             </div>
             
        </div>
    </div>
  )
}

export default ProjectItems
