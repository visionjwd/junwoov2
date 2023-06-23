import React from 'react'
import style from '../styles/ContactIcon.module.css'
import Image from 'next/image'

import Link from 'next/link';



function ContactIcon(props) {
  return (
    <div className = {style.wrapper}>
        <Link href = {props.whereTo} target = "_blank">
            {props.logo}
        </Link>
    </div>
  )
}

export default ContactIcon
