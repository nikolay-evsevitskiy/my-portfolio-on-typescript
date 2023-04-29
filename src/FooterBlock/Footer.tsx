import React from "react";
import style from './FooterWork.module.scss'
import {IconButton} from "../Common/IconButton/IconButton";
import commonStyle from "./../Common/Styles/Styles.module.css"
import {Title} from "../Common/Components/Title/Title";
import instagramIconImg from "../assets/images/instagram.png";
import linkedInIconImg from "../assets/images/linkedin.png";
import gitHubIconImg from "../assets/images/github (1).png";
import codeWarsIconImg from "../assets/images/codewars.svg";
import Tilt from "react-parallax-tilt";

type footerDataType = {
    id: number
    description: string
    url: string
    icons: string

}

export const Footer = () => {
    const instagramAddress = 'https://www.instagram.com/nikolai_evsevitski'
    const linkedInAddress = 'https://www.linkedin.com/in/nikolay-evsevitskiy'
    const gitHubAddress = 'https://github.com/nikolay-evsevitskiy'
    const codeWarsAddress = 'https://www.codewars.com/users/nikola007'
    const footerData: Array<footerDataType> = [
        {id: 1, description: 'Instagram', icons: instagramIconImg, url: instagramAddress},
        {id: 2, description: 'Linked In', icons: linkedInIconImg, url: linkedInAddress},
        {id: 3, description: 'Git Hub', icons: gitHubIconImg, url: gitHubAddress},
        {id: 4, description: 'Code wars', icons: codeWarsIconImg, url: codeWarsAddress},
    ]

    return <div className={style.footerBlock}>
        <div className={`${commonStyle.container} ${style.footerContainer}`}>
            <Title text={'Follow Me'}/>
            <div className={style.iconBlock}>
                {
                    footerData.map(i => {
                        return <Tilt key={i.id}
                                     scale={2}
                        >
                            <IconButton key={i.id} description={i.description} imgAddress={i.icons}
                                        urlAddress={i.url}/>
                        </Tilt>
                    })
                }
            </div>
            <h5 className={style.copyBlock}>©2022 All rights reserved</h5>
        </div>
    </div>
}
