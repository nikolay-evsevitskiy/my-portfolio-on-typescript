import React from "react";
import style from './FooterWork.module.scss'
import {IconButton} from "../Common/IconButton/IconButton";
import commonStyle from "./../Common/Styles/Styles.module.css"
import {Title} from "../Common/Components/Title/Title";


export const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${commonStyle.container} ${style.footerContainer}`}>
            <Title text={'Nikolay Evsevitsky'} />
            <div className={style.iconBlock}>
                <IconButton description={'description'} urlAddress={''}/>
                <IconButton description={'description'} urlAddress={''}/>
                <IconButton description={'description'} urlAddress={''}/>
                <IconButton description={'description'} urlAddress={''}/>
            </div>
            <h3 className={style.copyBlock}>©2021 All rights reserved</h3>
        </div>
    </div>
}
