import React from "react";
import style from './RemoteWork.module.css'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Title/Title";

export const RemoteWork = () => {
    return <div className={style.RemoteWorkBlock}>
        <div className={`${commonStyle.container} ${style.RemoteWorkContainer}`}>
            <Title text={'I am considering options for remote work'}/>
            <Button title={"Hire me!"} address={'#'} />
        </div>
    </div>
}