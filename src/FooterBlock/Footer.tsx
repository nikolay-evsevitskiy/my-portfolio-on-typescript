import React from "react";
import style from './FooterWork.module.scss'
import {IconButton} from "../Common/IconButton/IconButton";
import commonStyle from "./../Common/Styles/Styles.module.css"
import {Title} from "../Common/Components/Title/Title";
import instagramIconImg from "../assets/images/instagram.png";
import linkedInIconImg from "../assets/images/linkedin.png";
import gitHubIconImg from "../assets/images/github (1).png";
import codeWarsIconImg from "../assets/images/codewars.svg";


export const Footer = () => {
    const instagramAddress = 'https://www.instagram.com/nikolai_evsevitski'
    const linkedInAddress = 'https://www.linkedin.com/in/nikolay-evsevitskiy'
    const gitHubAddress = 'https://github.com/nikolay-evsevitskiy'
    const codeWarsAddress = 'https://www.codewars.com/users/nikola007'

    return <div className={style.footerBlock}>
        <div className={`${commonStyle.container} ${style.footerContainer}`}>
            <Title text={'My pages'}/>
            <div className={style.iconBlock}>
                <IconButton description={'Instagram'} imgAddress={instagramIconImg} urlAddress={instagramAddress}/>
                <IconButton description={'Linked In'} imgAddress={linkedInIconImg}  urlAddress={linkedInAddress}/>
                <IconButton description={'Git Hub'} imgAddress={gitHubIconImg}  urlAddress={gitHubAddress}/>
                <IconButton description={'Code wars'} imgAddress={codeWarsIconImg}  urlAddress={codeWarsAddress}/>
            </div>
            <h3 className={style.copyBlock}>©2022 All rights reserved</h3>
        </div>
    </div>
}
