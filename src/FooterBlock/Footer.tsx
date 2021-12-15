import React from "react";
import style from './FooterWork.module.css'
import {IconButton} from "../Common/IconButton/IconButton";


export const Footer = () => {
    return <div className={style.FooterContainer}>
        <div className={style.FooterBlock}>
            <h3 className={style.title}>Nikolay Evsevitsky</h3>
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