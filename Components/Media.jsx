import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import style from '../styles/Media.module.css'

import media from '../Assets/mediabus.jpg'
import content from '../Assets/content.jpg'
import { Camera } from '@mui/icons-material';

function Media() {
  return (
    <div className = {style.main} id = 'media'>
        <div className = {style.contents}>
            <div className = {style.text}>
                <h2>When I'm not working on engineering projects...</h2>
                <div className = {style.mediacontainer}>
                    <div className = {style.clickable}>
                        <div className = {style.imageDiv}>
                        <Image className = {style.contentimage} src = {media} alt = '/'/>
                        <div className = {style.overlay}>
                            <div className = {style.overlayText}>
                            <h2>JWD Creative House</h2>
                            <p>Media Business serving small businesses in Toronto. Official Media Provide for Importfest, YECS, and other major automotive shows. </p>
                            </div>
                            <div className = {style.buttonContainer}>
                                <Link href = "https://www.jwdcreativehouse.com" target = "_blank">
                                    <button>Website</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className = {style.clickable}>
                        <div className = {style.imageDiv}>
                        <Image className = {style.contentimage} src = {content} alt = '/'/>
                        <div className = {style.overlay}>
                            <div className = {style.overlayText}>
                            <h2>VisionJWD</h2>
                            <p>Personal Media Showcase</p>
                            </div>
                            <div className = {style.buttonContainer}>
                                <Link href = "https://www.instagram.com/visionjwd" target = "_blank">
                                    <button>Visit</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = {style.title}>
            <CameraRollIcon/>
            <h1>Media</h1>
        </div>
      
    </div>
  )
}

export default Media
